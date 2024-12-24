const express = require("express");
const {getUser, getUserById, insertUser, editUser, deleteUser}  = require("../controllers/users");
const { insertProduct, getProduct, editProduct, getProductById, deleteProduct, getProductSeller } = require("../controllers/product");
const { insertTransaction, getTransaction, editTransaction, getTransactionById } = require("../controllers/transaction");
const { validateUser } = require("../validators/userValidator");
const upload = require("../middlewares/uploadFile");
const { register, login, verifyToken } = require("../controllers/auth");
const checkAuth = require("../middlewares/checkAuth");
const router = express.Router();


router.get('/', (_, res) => {
    res.send("Hello World")
})

// product
router.get('/product', checkAuth, getProduct)
router.get('/product-seller', checkAuth, getProductSeller)
router.get('/product/:id', getProductById)
router.post('/product',checkAuth, upload('image'), insertProduct)
router.patch('/product/:id', upload('image'), editProduct)
router.delete('/product/:id', deleteProduct)

// transaction
router.get('/transaction', checkAuth, getTransaction)
router.get('/transaction/:id', getTransactionById)
router.post('/transaction', checkAuth, insertTransaction)
router.patch('/transaction', editTransaction)

router.post('/register', register)
router.post('/login', login)
router.get('/verify-token', checkAuth, verifyToken)


module.exports = router