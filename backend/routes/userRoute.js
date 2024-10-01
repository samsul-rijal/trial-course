
const express = require("express");
const {getUser, getUserById, insertUser, editUser, deleteUser}  = require("../controllers/users");
const { validateUser } = require("../validators/userValidator");
const checkAuth = require("../middlewares/checkAuth");
const userRoute = express.Router();


userRoute.get('/', checkAuth, getUser)
userRoute.get('/:id', getUserById)
userRoute.post('/', validateUser, insertUser)
userRoute.patch('/:id', editUser)
userRoute.delete('/:id', deleteUser)


module.exports = userRoute