// // Manipulasi data array

// let nama = ["Rey", "Reva", "Samsul", "Pasyah"]

// nama[2] = "Budi"

// nama.push("Jono") // menambahkan data kedalam data array urutan terakhir
// nama.shift() // hapus data array item pertama
// nama.pop() // hapus data array item terakhir
// nama.reverse() // untuk membalikan urutan

// console.log(nama);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Sort the Array
// fruits.sort(); // untuk sorting

// console.log(fruits);


// let biodataSiswa = [
//     {
//         nama: "Rey",
//         alamat: {
//             kelurahan: '',
//             kecamatan: ''
//         },
//         umur: 123
//     },
//     {
//         nama: "Reva",
//         alamat: {
//             kelurahan: '',
//             kecamatan: ''
//         },
//         umur: 123
//     },
// ]


// biodataSiswa.push({
//     nama: "Samsul",
//     alamat: {
//         kelurahan: '',
//         kecamatan: ''
//     },
//     umur: 123
// })


// biodataSiswa.shift();
// console.log(biodataSiswa);


// -------------------------------------------------
// Manipulasi String
// -------------------------------------------------

// let text = "Halo nama saya Samsul";
// let result = text.replace("Samsul", "Budi");


// let text = "Halo nama Saya Budi dan umur saya 20 tahun";
// let result = text.replaceAll(/Saya/gi, "gua");
// console.log(result);

// let text = "Mr. Blue has a blue house";
// let position = text.search("Mr");
// console.log(position);


// let text = "Hello guys saya hari ini sedang belanja di pasar";
// let result = text.substring(0, 29);
// console.log(result+".....");


// let nama = "Samsul"
// let kecil = nama.toLowerCase();
// let gede = nama.toUpperCase();
// console.log(kecil);
// console.log(gede);


// --------------------------------------------
// Aritmatika
// --------------------------------------------


// let tambah = 10 + 10
// let kurang = 10 - 10
// let bagi = 10 / 10
// let kali = 10 * 10
// console.log(tambah);
// console.log(kurang);

// let hargaProduk = 10000;
// let jumlahBarang = "10";

// let result = hargaProduk * parseInt(jumlahBarang);
// console.log(result);


// ------------------------------------------
// Kondisi
// -----------------------------------------
// let isSingle = false

// if(isSingle){
//     console.log("JOMBLO");
// } else {
//     console.log("GADUN");
// }

// let umur = 15

// if(umur > 16){
//     console.log("Dewasa");
// } else {
//     console.log("Belum dewasa");
// }
// == melakukan perbandingan
// === melakukan perbandingan sampai cek ke tipe datanya
// let umur = "15"
// if(umur === 15){
//     console.log("Dewasa");
// } else {
//     console.log("Belum dewasa");
// }

// let hari = "Minggu"

// if(hari == "Senen"){
//     console.log("jalan sama Rika");
// } else if(hari == "Selasa"){
//     console.log("Jalan sama Samsul");
// } else if(hari == "Rabu"){
//     console.log("Jalan sama Rey");
// } else {
//     console.log("Jalan sama siapa aja");
// }

// let hari = "Minggu"
// switch(hari) {
//     case "Senen":
//       // code block
//       console.log("jalan sama Rika");
//       break;
//     case "Selasa":
//       // code block
//       console.log("Jalan sama Samsul");
//       break;
//     case "Rabu":
//       // code block
//       console.log("Jalan sama Rey");
//       break;
//     default:
//       // code block
//       console.log("Jalan sama siapa aja");
// }


// ------------------------------------------
// FUNCTION
// ------------------------------------------

function sayHai(){

    console.log("Hellooo");
    
}

sayHai();

function buatKopi(){

    // ngalusin biji kopi
    // naker kopi
    // tuang air panas
    
    // hasilnya jadi kopinya 

    let kopi = "kopi manis "
    let air = "air panas"

    return kopi + air
}

console.log(buatKopi());

// Tugasnya menjelaskan materi hari ini
// - Manipulasi data array
// - Manipulasi data string
// - Aritmatika
// - Kondisi


// --------------------
// Next Materi 
// ---------------------
// Function lanjutan
// Looping


