const product = [
    {
        name: "Aqua",
        price: 2500
    },
    {
        name: "Fanta",
        price: 15000
    },
    {
        name: "Aqua",
        price: 2500
    },
]


exports.getProduct = (req, res) => {
    res.json(product)
}