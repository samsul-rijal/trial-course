
// berfungsi untuk debug data
// console.log("Hallo gesss"); 
// document.write("Hello World!!");

// --------------------------------------------------
// VARIABEL
// --------------------------------------------------
// VAR, LET, CONST

// Deklarasi VAR
// bisa di dekalarasi atau dibuat ulang
// var nama = "Samsul"
// var alamat = "Depok"

// var nama = "Rey"

// Dekalrasi LET
// tidak bisa di deklarasi atau dibuat ulang
// let nama = "Samsul"
// let alamat = "Depok"

// let nama = "Reva" 

// Dekalarasi CONST
// data tetap tidak bisa diubah
// const nama = "Samsul"
// const alamat = "Depok"

// console.log(nama);
// console.log(alamat);


// Data Type
// let nama = 'Samsul';
// let alamat = "Depok";
// let umur = 123;
// let isSingle = true

// halo nama saya Samsul alamat di Depok umur saya 123
// console.log('halo nama saya '+nama+' alamat di '+alamat+' umur saya '+umur);
// console.log('halo nama saya', nama, 'alamat di', alamat, 'umur saya', umur);
// console.log(`halo nama saya ${nama} alamat di ${alamat} umur saya ${umur}`);


// Object

// buat data rey dan reva
// let nama =  "Rey"
// let alamat =  "Depok"
// let umur = 123

let personal = {
    nama: "Rey",
    alamat: "Depok",
    umur: 123
}

console.log(personal);
console.log(personal.nama);

// let biodata2 = {
//     nama: "Reva",
//     alamat: "Jakarta",
//     umur: 123
// }


// Array
let siswa = ["Samsul","Rey","Reva"]

console.log(siswa[0]);
console.log(siswa[2]);

let biodataSiswa = [
    {
        nama: "Rey",
        alamat: {
            kelurahan: '',
            kecamatan: ''
        },
        umur: 123
    },
    {
        nama: "Reva",
        alamat: {
            kelurahan: '',
            kecamatan: ''
        },
        umur: 123
    }
]

console.log(biodataSiswa[1]);
console.log(biodataSiswa[1].alamat);

// Besok
// ===========================================
// rekap materi hari ini yang menjelaskan
// fungsi variabel
// perbedaan var, let, const
// fungsi object, kenapa menggunakan object
// fungsi array, kenapa menggunakan array
// ===========================================


// Materi selanjutnya
// ==============================
// Aritmatika 
// Konidisi
// Looping
// Function
// =============================
