
let daftarProduk = [
    {
        name: "Royco",
        price: 2500
    },
    {
        name: "Sasa",
        price: 4000
    },
    {
        name: "Ladaku",
        price: 2000
    },
]


// console.log(daftarProduk);

function insertProduct(){

    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    
    // console.log(name);
    // console.log(price);
    let product = {
        name: name,
        price: parseInt(price)
    }

    daftarProduk.push(product)
    // console.log(daftarProduk);

    getProduct()

}


function getProduct(){
    document.getElementById('product-list').innerHTML = ''
    
    for(let i = 0; i < daftarProduk.length; i++){
        // console.log(daftarProduk[i]);
    
    
        document.getElementById('product-list').innerHTML += 
        `
            <div id="product-list">
                <p>Nama Produk: ${daftarProduk[i].name}</p>
                <p>Harga Produk: ${daftarProduk[i].price}</p>
            </div>
            <hr>
        `
    
    }
}

getProduct();

function transaksi(produk, qty, tunai, hari){

    // console.log(produk);

    let transaksi = {
        produk: produk.name,
        qty: qty,
        price: produk.price,
        diskon: 0,
        total: 0,
        tunai: tunai,
        kembalian: 0
    }


    if(hari == "jumat"){
        transaksi.diskon = 1000
    }

    transaksi.total = produk.price * qty - transaksi.diskon // untuk merubah data transaksi total
    transaksi.kembalian = tunai - transaksi.total // untuk merubah data transaksi kembalian

    return transaksi
}

// console.log(transaksi(daftarProduk[0], 2, 5000, "senin"));

// document.getElementById("product-name").innerHTML = transaksi(daftarProduk[0], 2, 10000, "selasa")

let dataProduct = transaksi(daftarProduk[0], 2, 5000, "senin")

document.getElementById("product-name").innerHTML = 'Nama Produk: ' + dataProduct.produk
document.getElementById("product-price").innerHTML = 'Harga Produk ' + dataProduct.price
document.getElementById("product-amount").innerHTML = 'Jumlah Produk ' + dataProduct.qty
document.getElementById("product-total").innerHTML = 'Total Produk ' + dataProduct.total
document.getElementById("product-discount").innerHTML = 'Diskon ' + dataProduct.diskon
document.getElementById("product-cash").innerHTML = 'Tunai ' + dataProduct.tunai


// Next 