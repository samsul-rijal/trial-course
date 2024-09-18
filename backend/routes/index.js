const express = require("express");
const {getUser, getUserById, insertUser, editUser, deleteUser}  = require("../controllers/users");
const { getProduct } = require("../controllers/product");
const router = express.Router();


router.get('/', (_, res) => {
    res.send("Hello World")
})

// users
router.get('/user', getUser)
router.get('/user/:id', getUserById)
router.post('/user', insertUser)
router.patch('/user/:id', editUser)
router.delete('/user/:id', deleteUser)

// product
router.get('/product', getProduct)


module.exports = router