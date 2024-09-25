// const connection = require("../db/connection")
const {User} = require("../models")


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

        const result = await User.findAll()
        
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
        // const result = await User.findOne({ where: { id: ID } })        

        // if(!result){
        //     res.status(404).json({
        //         code: 404,
        //         message: `id ${ID} not found`
        //     })
        // }

        const result = await findOneUser(ID, res)

        res.json({
            data: result,
            message: "success"
        })

    } catch (error) {
        console.log(error);
    }
}


exports.insertUser = async(req, res) => {

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


