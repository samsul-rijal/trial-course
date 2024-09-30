const express = require("express");
const {getUser, getUserById, insertUser, editUser, deleteUser}  = require("../controllers/users");
const { insertProduct, getProduct, editProduct, getProductById, deleteProduct } = require("../controllers/product");
const { insertTransaction, getTransaction, editTransaction, getTransactionById } = require("../controllers/transaction");
const { validateUser } = require("../validators/userValidator");
const upload = require("../middlewares/uploadFile");
const router = express.Router();


router.get('/', (_, res) => {
    res.send("Hello World")
})

// users
router.get('/user', getUser)
router.get('/user/:id', getUserById)
router.post('/user', validateUser, insertUser)
router.patch('/user/:id', editUser)
router.delete('/user/:id', deleteUser)

// product
router.get('/product', getProduct)
router.get('/product/:id', getProductById)
router.post('/product',upload('image'), insertProduct)
router.patch('/product', editProduct)
router.delete('/product/:id', deleteProduct)

// transaction
router.get('/transaction', getTransaction)
router.get('/transaction/:id', getTransactionById)
router.post('/transaction', insertTransaction)
router.patch('/transaction', editTransaction)



module.exports = router