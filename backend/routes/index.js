const express = require("express");
const {getUser, getUserById, insertUser, editUser, deleteUser}  = require("../controllers/users");
const { insertProduct, getProduct, editProduct, getProductById, deleteProduct } = require("../controllers/product");
const { insertTransaction, getTransaction, editTransaction, getTransactionById } = require("../controllers/transaction");
const { validateUser } = require("../validators/userValidator");
const upload = require("../middlewares/uploadFile");
const { register, login } = require("../controllers/auth");
const checkAuth = require("../middlewares/checkAuth");
const router = express.Router();


router.get('/', (_, res) => {
    res.send("Hello World")
})

// product
router.get('/product', getProduct)
router.get('/product/:id', getProductById)
router.post('/product',checkAuth, upload('image'), insertProduct)
router.patch('/product', editProduct)
router.delete('/product/:id', deleteProduct)

// transaction
router.get('/transaction', checkAuth, getTransaction)
router.get('/transaction/:id', getTransactionById)
router.post('/transaction', checkAuth, insertTransaction)
router.patch('/transaction', editTransaction)


router.post('/register', register)
router.post('/login', login)



module.exports = router