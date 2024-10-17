const deleteFile = require("../middlewares/deleteFile");
const {Product, User} = require("../models")

exports.getProduct = async(req, res) => {


    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit 
    console.log(offset);

    try {

        const { count, rows }  = await Product.findAndCountAll({limit: limit, offset: offset},{
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

        const dataProducts = rows.map((item) => {
            const plainItem = item.get({ plain: true }); // Dapatkan objek biasa
            return { ...plainItem, image: process.env.PATH_FILE + plainItem.image }; // Pastikan untuk mengakses plainItem.image
        });

        // count 30
        // limit 5
        // totalPage 3
        
        res.json({
            data: dataProducts,
            totalItem: count,
            totalPage: Math.ceil(count / limit),
            currentPage: page, 
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
        const dataProduct = {...plainItem, image: process.env.PATH_FILE + result.image}

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
    // console.log(req.file);

    try {
        const newProduct = {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            image: req.file.filename,
            // userId: req.body.userId,
            userId: req.user.id, // ngambil data dari token

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