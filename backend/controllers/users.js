const user = [
    {
        id: 1,
        nama: "Reva",
        alamat: "Depok"
    },
    {
        id: 2,
        nama: "Rey",
        alamat: "Jakarta"
    },

]

const connection = require("../db/connection")

exports.getUser = async(req, res) => {

    try {

        const result = await connection.query('SELECT * FROM users ORDER BY id ASC');
        console.log(result.rows);

        res.json({
            data: result.rows,
            message: "success"
        })

    } catch (error) {
        console.log(error);
    }
}

exports.getUserById = async(req, res) => {
    const ID = parseInt(req.params.id)

    try {

        const result = await connection.query(`SELECT * FROM users WHERE id = ${ID}`);
        // console.log(result.rows);
        const userData = result.rows[0]
        // console.log(userData);

        if(!userData){
            res.status(404).json({
                code: 404,
                message: `id ${ID} not found`
            })
        }

        res.json({
            data: userData,
            message: "success"
        })

    } catch (error) {
        console.log(error);
    }
}


exports.insertUser = (req, res) => {

    const ID = user.length + 1
    // console.log(ID);
    console.log(req.body);
    const newUser = {
        id: ID,
        nama: req.body.nama,
        alamat: req.body.alamat
    }

    user.push(newUser)


    res.status(201).json({
        code: 201,
        data: newUser,
        message: "data berhasil ditambahkan"
    })
}



exports.editUser = (req, res) => {

    const ID = parseInt(req.params.id)

    const indexUser = user.findIndex((item) => item.id == ID)
    console.log(indexUser);

    user[indexUser].nama = req.body.nama 
    user[indexUser].alamat = req.body.alamat

    res.status(200).json({
        data: user[indexUser],
        message: "success"
    })
}

exports.deleteUser = (req, res) => {

    const ID = parseInt(req.params.id)

    const indexUser = user.findIndex((item) => item.id == ID)
    user.splice(indexUser, 1)

    res.status(200).json({
        message: "data berhasil dihapus"
    })
}


