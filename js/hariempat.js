

// console.log(new Date());

// let waktu = new Date('Fri Aug 30 2024 11:12:30 GMT+0700 (Western Indonesia Time)');

// let tahun = waktu.getFullYear();
// let bulan = waktu.getMonth();
// let tanggal = waktu.getDate();
// let hari = waktu.getDay();
// let jam = waktu.getHours();
// let menit = waktu.getMinutes();
// let detik = waktu.getSeconds();

// console.log(tahun);
// console.log(bulan);
// console.log(tanggal);
// console.log(hari);
// console.log(jam);
// console.log(menit);
// console.log(detik);

// Jumat, 30 Agustus 2024 22:55
// let month = ["januari","febuari","maret","april","mei","juni","juli","agustus","september"]
// let day = ["minggu","senin","selasa","rabu","kamis","jumat","sabtu"]

// 1 - 9 tidak ada 0 di depan 

// if(jam <= 9){
//     jam = `0${jam}`
// } else if(menit <= 9){
//     menit = `0${menit}`
// }

// console.log(`${day[hari]}, ${tanggal} ${month[bulan]} ${tahun} ${jam}:${menit}`);

// console.log(bulan);
// console.log(hari);

// console.log('copyright '+ new Date().getFullYear());


// tes kondisi

// bilangan 3 ganjil bukan
// % 2 == 0
// let bilangan = 6
// if(bilangan %2 == 0){
//     console.log("bilangan genap");
// } else {
//     console.log("bilangan ganjil");
// }

// kondisi

// &&	logical and ===> kedua kondisi harus terpenuhi
// ||	logical or ===> salah satu kondisi terpenuhi
// !	logical not ===> selain kondisi yang ditentukan


// let nilai = 5
// let peringkat = 7

// if(nilai == 5 || peringkat == 2){
//     console.log("nilai jelek");
// } else {
//     console.log("nilai bagus");
// }


// let isSinggle = true
// if(isSinggle != false){
//     console.log("PUNYA PACAR");
// } else {
//     console.log("JOMBLO");
// }


// let isSinggle = true
// if(isSinggle){
//     console.log("PUNYA PACAR");
// } else {
//     console.log("JOMBLO");
// }


// Looping

// console.log("Halloo");
// console.log("Halloo");
// console.log("Halloo");
// console.log("Halloo");
// console.log("Halloo");
// console.log("Halloo");

for(let index = 0; index < 5; index++){

    // console.log("Halooo " + index);
}

// challenge test

// buat variabel ganjil dan genap
let genap = [] // 2 12 16 8
let ganjil = [] // 1 5 3 7 9 1 15

let bilangan = [1,2,5,3,7,9,1,12,15,16,8,18,22]

// jika bilangan[1]
// jika bilangan[2]
// jika bilangan[5]

// console.log(bilangan.length);

for (let index = 0; index < bilangan.length; index++) {
    if(bilangan[index] %2 == 0){
        genap.push(bilangan[index])
    } else {
        ganjil.push(bilangan[index])
    }
    // console.log(bilangan[index]);
    
}

// console.log(genap);
// console.log(ganjil);


// Soal fizzbuzz
// jika sisa bagi 3 = 0 maka 
// fizz
// jika sisa bagi 5 = 0 maka 
// buzz
// jika sisa bagii 3 = 0 dan 5 = 0 maka
// fizzbuzz

// let angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// for (let index = 0; index < angka.length; index++) {
    
//     if(angka[index] %3 == 0 && angka[index] %5 == 0){
//         console.log("fizzbuzz" + angka[index]);
//     }else if(angka[index] %3 == 0){
//         console.log("fizz" + angka[index]);
//     } else if(angka[index] %5 == 0){
//         console.log("buzz" + angka[index]);
//     } else {
//         console.log(angka[index]);
//     }

// }


// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// console.log(text);

// for(let index of angka){
//     console.log(angka[index]);
// }

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x;
// }

// let angka2 = [1,2,4,5,6]
// let i = 0
// while (i < angka2.length) {
//     console.log(angka2[i]);

//     // code
//     i++;
// }

// do {
//     console.log(angka2[i]);

//     // code

//     i++;
// } while (i < angka2.length);


// besok
// jelasin fungsi new Date
// jelasin kondisi &&, ||, ! sama beri contoh
// looping for, for in, for of
// looping while do while sama sebutkan perbedaan anatara for, while dan do while

// -----------------------------------------
// Next Materi
// DOM

