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

exports.getUser = (req, res) => {
    res.json({
        data: user,
        message: "success"
    })
}

exports.getUserById = (req, res) => {
    // filter => hasilnya array
    // find => hasilnya object
    // console.log(req.params.id);
    const ID = parseInt(req.params.id)

    const userFindOne = user.find((item) => item.id == ID)
    // console.log(userFindOne);

    if(!userFindOne){
        res.status(404).json({
            code: 404,
            message: `id ${ID} not found`
        })
    }

    res.status(200).json({
        data: userFindOne,
        message: "success"
    })
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


