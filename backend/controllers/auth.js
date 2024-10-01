const {User} = require("../models")

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


exports.register = async(req, res) => {


    const {name, email, password, address} = req.body

    const saltRound = 10 // waktu encrypt password per detik ~10 hashes/sec
    const encryptPassword = bcrypt.hashSync(password, saltRound)

    // console.log(password, 'belum di encrypt');
    // console.log(encryptPassword, 'sudah di encrypt');

    const newUser = {
        name,
        email,
        password: encryptPassword,
        address
    }

    const result = await User.create(newUser)

    res.status(201).json({
        code: 201,
        data: result,
        message: "register berhasil"
    })
}

exports.login = async(req, res) => {


    const {email, password} = req.body;

    const user = await User.findOne({where: {email}})

    // kondisi cek email di database ada atau tidak
    if(!user){
        return res.status(400).json({
            code: 400,
            message: `email salah`
        })
    }



    const isMatch = bcrypt.compareSync(password, user.password);

    // kondisi compare password inputan dan password yang ada pada database tabel user
    if(!isMatch){
        return res.status(400).json({
            code: 400,
            message: `not a match`
        })
    }

    const secretKey = process.env.SECRET_KEY

    const accessToken = jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email
    }, secretKey, {expiresIn: '10m'})




    res.status(201).json({
        code: 201,
        data: {
            name: user.name,
            email: user.email,
            token: accessToken
        },
        message: "login berhasil"
    })
}

