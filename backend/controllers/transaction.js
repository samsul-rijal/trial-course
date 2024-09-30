const {Transaction, User} = require("../models")


exports.getTransaction = async(req, res) => {

    try {

        const result = await Transaction.findAll({
            attributes: {
                exclude: ['userId','role']
            },
            include: {
                model: User,
                as: 'user',
                attributes: {
                    exclude: ['createdAt','updatedAt']
                }
            }
        })
        
        res.json({
            data: result,
            message: "success"
        })

    } catch (error) {
        console.log(error);
    }
}

exports.getTransactionById = async(req, res) => {
    
    try {
        
        const ID = parseInt(req.params.id)
        const result = await Transaction.findByPk(ID, {
            attributes: {
                exclude: ['userId','role']
            },
            include: {
                model: User,
                as: 'user',
                attributes: {
                    exclude: ['createdAt','updatedAt']
                }
            }
        })        

        if(!result){
            res.status(404).json({
                code: 404,
                message: `id ${ID} not found`
            })
        }

        res.json({
            data: result,
            message: "success"
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "internal server errror"
        })
    }
}

exports.insertTransaction = async(req, res) => {

    try {
        const newTransaction = {
            userId: req.body.userId,
            productId: req.body.productId,
        }
    
        const result = await Transaction.create(newTransaction)
    
        res.status(201).json({
            code: 201,
            data: result,
            message: "data berhasil ditambahkan"
        })
    } catch (error) {


        res.status(500).json({
            code: 500,
            message: "internal server errror"
        })
    
    
    }
}

exports.editTransaction = async(req, res) => {

    try {
        const ID = parseInt(req.params.id)

        const result = await Transaction.findByPk(ID)   
    
        if(!result){
           return res.status(404).json({
                code: 404,
                message: `id ${ID} not found`
            })
        }
    
        const updateTransaction = {
            userId: req.body.userId,
            productId: req.body.productId,
            status: req.body.status
        }
    
        const resultTrans = await Transaction.update(updateTransaction, {where: { id: ID } })
    
        res.status(200).json({
            data: resultTrans,
            message: "update data berhasil"
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "internal server errror"
        })
        
    }
}