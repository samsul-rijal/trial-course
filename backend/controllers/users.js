// const connection = require("../db/connection")
const {User, Product, Transaction} = require("../models")


const findOneUser = async(id, res) => {

    const result = await User.findOne({ where: { id: id } })        

    if(!result){
        return res.status(404).json({
            code: 404,
            message: `id ${id} not found`
        })
    }

    return result

}

exports.getUser = async(req, res) => {

    try {

        const result = await User.findAll(
            {
                include: [
                    {
                        model: Product,
                        attributes: {
                            exclude: ['createdAt','updatedAt']
                        }
                    },
                    {
                        model: Transaction,
                        attributes: {
                            exclude: ['createdAt','updatedAt']
                        }
                    }
                ]
                
                
            }
        )
        
        res.json({
            data: result,
            message: "success"
        })

    } catch (error) {
        console.log(error);
    }
}

exports.getUserById = async(req, res) => {
    
    try {
        
        const ID = parseInt(req.params.id)
        const result = await User.findOne({ where: { id: ID } })        

        if(!result){
            res.status(404).json({
                code: 404,
                message: `id ${ID} not found`
            })
        }

        // const result = await findOneUser(ID, res)

        res.json({
            data: result,
            message: "success"
        })

    } catch (error) {
        console.log(error);
    }
}


exports.insertUser = async(req, res, next) => {

    try {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        }
    
        const result = await User.create(newUser)
    
        res.status(201).json({
            code: 201,
            data: result,
            message: "data berhasil ditambahkan"
        })
    } catch (error) {

        // if(error.name === 'SequelizeUniqueConstraintError'){
        //     res.status(400).json({
        //         code: 400,
        //         message: error.errors[0].message
        //     })

        // } else {
        //     res.status(500).json({
        //         code: 500,
        //         error: error.errors[0].message,
        //         message: "internal server errro"
        //     })
        // }

        // Jika terjadi kesalahan, teruskan ke middleware error handler
        next(error);
    }
}



exports.editUser = async(req, res) => {

    const ID = parseInt(req.params.id)

    const result = await User.findOne({ where: { id: ID } })        

    if(!result){
       return res.status(404).json({
            code: 404,
            message: `id ${ID} not found`
        })
    }
    // await findOneUser(ID, res)


    const updateUser = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    }

    await User.update(updateUser,  {where: { id: ID } })

    res.status(200).json({
        data: updateUser,
        message: "update data berhasil"
    })
}

exports.deleteUser = async(req, res) => {

    const ID = parseInt(req.params.id)

    const result = await User.findOne({ where: { id: ID } })        

    if(!result){
        return res.status(404).json({
            code: 404,
            message: `id ${ID} not found`
        })
    }

    await User.destroy({
        where: {
          id: ID,
        },
    });

    return res.status(200).json({
        message: "data berhasil dihapus"
    })
}


