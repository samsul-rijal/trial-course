const deleteFile = require("../middlewares/deleteFile");
const {Product, User} = require("../models")


const pathFile = 'http://localhost:8000/uploads/'

exports.getProduct = async(req, res) => {

    try {

        const result = await Product.findAll({
            attributes: {
                exclude: ['userId']
            },
            include: {
                model: User,
                as: 'user',
                attributes: {
                    exclude: ['createdAt','updatedAt']
                }
            }
        })

        const dataProducts = result.map((item) => {
            const plainItem = item.get({ plain: true }); // Dapatkan objek biasa
            return { ...plainItem, image: pathFile + plainItem.image }; // Pastikan untuk mengakses plainItem.image
        });
        
        res.json({
            data: dataProducts,
            message: "success"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "internal server errror"
        })
    }
}

exports.getProductById = async(req, res) => {
    
    try {
        
        const ID = parseInt(req.params.id)
        const result = await Product.findByPk(ID, {
            attributes: {
                exclude: ['userId']
            },
            include: {
                model: User,
                as: 'user',
                attributes: {
                    exclude: ['createdAt','updatedAt']
                }
            }
        })        

        const plainItem = result.get({ plain: true });
        const dataProduct = {...plainItem, image: pathFile + result.image}

        if(!result){
            res.status(404).json({
                code: 404,
                message: `id ${ID} not found`
            })
        }

        res.json({
            data: dataProduct,
            message: "success"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "internal server errror"
        })
    }
}

exports.insertProduct = async(req, res) => {
    console.log(req.file);

    try {
        const newProduct = {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            image: req.file.filename,
            userId: req.body.userId,

        }
        console.log(newProduct);
    
        const result = await Product.create(newProduct)
    
        res.status(201).json({
            code: 201,
            data: result,
            message: "data berhasil ditambahkan"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "internal server errror"
        })
    }
}

exports.editProduct = async(req, res) => {

    try {
        const editProduct = {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            userId: req.body.userId,

        }
        // console.log(editProduct);
    
        const result = await Product.update(editProduct, {where: {id: ID}})
    
        res.status(200).json({
            code: 200,
            data: result,
            message: "data berhasil diedit"
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "internal server errror"
        })
    }
}

exports.deleteProduct = async(req, res) => {

    try {
        
        const ID = parseInt(req.params.id)

        const result = await Product.findOne({ where: { id: ID } })        
    
        if(!result){
            return res.status(404).json({
                code: 404,
                message: `id ${ID} not found`
            })
        }
    
        await Product.destroy({
            where: {
              id: ID,
            },
        });

        deleteFile(result.image) // fungsi untuk delete file
    
        return res.status(200).json({
            message: "data berhasil dihapus"
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "internal server errror"
        })
    }
}