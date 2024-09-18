
// function jumlah1(){
//     let a = 20;
//     let b = 30;

//     return a + b
// }

// console.log(jumlah1);

// function jumlah(nilai1, nilai2){

//     return nilai1 + nilai2

// }

// console.log(jumlah(10, 2)); // halaman home
// console.log(jumlah(10, 2)); // halaman produk

// function makeIndomie(pembeli,rasa, jenis){

//     return pembeli + rasa + jenis
// }

// console.log(makeIndomie("Reva ","Rendang ", "Goreng"));
// console.log(makeIndomie("Ray ","Soto ", "Kuah"));
// console.log(makeIndomie("Budi ","Cabe ijo ", "Kuah"));

// static / hard code / tulis langsung
// dynamic / datanya otomatis

// jika harga lebih besar dari 50000, maka dia mendapatkan diskon potongan 1000

// function cekHarga(harga, diskon){

//     if(harga > 50000){
//         return harga - diskon
//     }else{
//         return harga
//     }

// }

// console.log(cekHarga(60000, 1000));


// function totalBelanja(id ,price, quantity){

//     return id /* string id pembeli */ + price * quantity
// }
// console.log(totalBelanja("00129384 ", 2400, 3));

// function jadwalPelajaran(hari){

//     let mapel = ["bahasa inggris", "bahasa indonesia", "bahasa arab"]

//     // if(hari == "kamis"){
//     //     return mapel[0]
//     // } else if(hari == "jumat"){
//     //     return mapel[2]
//     // } else {
//     //     return "Libur"
//     // }

//     // kondisi Ternary operator
//     // let hasil = hari == "kamis" ? mapel[0] : "Libur" // contoh if else
//     let hasil = hari == "kamis" ? mapel[0] : hari == "jumat" ? mapel[2] : "Libur" 

//     // jika hari jumat masak indomie, kalau bukan masak bakso
//     // let hasil = hari == "jumat" ? "masak indomie" : "masak bakso"
//     return hasil
// }

// console.log(jadwalPelajaran("jumat"));


// let daftarProduk = [
//     {
//         name: "Royco",
//         price: 2500
//     },
//     {
//         name: "Sasa",
//         price: 4000
//     },
//     {
//         name: "Ladaku",
//         price: 2000
//     },
// ]

// pelanggan dia beli produk, tunai
// function transaksi(produk, qty, tunai, hari){

//     // console.log(produk);

//     let transaksi = {
//         produk: produk.name,
//         qty: qty,
//         price: produk.price,
//         diskon: 0,
//         total: 0,
//         tunai: tunai,
//         kembalian: 0
//     }


//     if(hari == "jumat"){
//         transaksi.diskon = 1000
//     }

//     transaksi.total = produk.price * qty - transaksi.diskon // untuk merubah data transaksi total
//     transaksi.kembalian = tunai - transaksi.total // untuk merubah data transaksi kembalian

//     return transaksi
// }

// console.log(transaksi(daftarProduk[0], 2, 5000, "senin"));

// a()
// function a(){
//     console.log("test");
// }

// function ekspresion
const say = function() {
    console.log("hallo"); 
    
}
say();

// arrow function
const sayHai = () => {
    console.log("hallo"); 
    
}
sayHai();


let myFunction = (a, b) => a * b;
console.log((myFunction(1,2)));

// ---------------------------------------------------------------------------
// tugas besok
// menjelaskan materi terkait function lanjutan


// next materi
// Looping


