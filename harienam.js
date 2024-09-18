
let daftarProduk = []

const categoryList = ["Makanan", "Minuman", "Cemilan"]


categoryList.map((item) => {
    document.getElementById("category").innerHTML += 
    `
        <select name="category" id="category">
            <option value="${item}">${item}</option>
        </select>
    
    `
})


function getProduct(){
    document.getElementById('product-list').innerHTML = ''
    
    for(let i = 0; i < daftarProduk.length; i++){
        // console.log(daftarProduk[i]);
    
    
        document.getElementById('product-list').innerHTML += 
        `
            <div id="product-list">
                <p>Nama Produk: ${daftarProduk[i].name}</p>
                <p>Harga Produk: ${daftarProduk[i].price}</p>
                <p>Kategori Produk: ${daftarProduk[i].category}</p>
            </div>
            <hr>
        `
    
    }
}

getProduct();



function isValidProduct(name, price){

    let errorName = false
    let errorPrice = false

    if(name == ''){
        // alert('nama wajib diisi')
        console.log("jallan");
        document.getElementById("error-name").innerHTML = 
        `
            <p>Nama wajib diisi</p>
        `
        document.getElementById("error-name").style.display = "inline"
        errorName = true   
    return {errorName, errorPrice} 
} else if(price == ''){
    // alert('harga wajib diisi')
        document.getElementById("error-price").innerHTML = 
        `
            <p>Harga wajib diisi</p>
        `
        document.getElementById("error-price").style.display = "inline"
        errorPrice = true    
        return {errorName, errorPrice}
    }

    return {errorName, errorPrice}

}

function insertProduct(){
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let category = document.getElementById("category").value

    // console.log(name);
    // console.log(price);
    // console.log(category);

    let {errorName, errorPrice} = isValidProduct(name, price)
    console.log(errorName);
    console.log(errorPrice);

    if(errorName == false){
        document.getElementById("error-name").innerHTML = ''
    }
    if(errorPrice == false){
        document.getElementById("error-price").innerHTML = ''
    }

    if(!errorName && !errorPrice){
        // console.log(name);
        // console.log(price);
        let product = {
            name: name,
            price: parseInt(price),
            category: category
        }
    
        daftarProduk.push(product)
        // console.log(daftarProduk);
    
        getProduct()
    }
    

}



// ------------------------------------------------------------------------------------------
// API
// ------------------------------------------------------------------------------------------

async function fetchAPI(url){
    const response = await fetch(url)
    const resultJson = await response.json()
    // console.log(resultJson);

    return resultJson

}

async function getUsers(){

    response = await fetchAPI('https://jsonplaceholder.typicode.com/users')
    // console.log(response);

    document.getElementById('user-list').innerHTML = ''

    response.map((item) => {
        // console.log(item);
        document.getElementById('user-list').innerHTML += 
        `
            <div id="user-list">
                <p>name: ${item.name}</p>
                <p>email: ${item.email}</p>
            </div>
            <hr>
        `
    })
}

getUsers()


async function getQuran(){

    const response = await fetchAPI('https://equran.id/api/v2/surat')
    console.log(response.data);


}

getQuran()
