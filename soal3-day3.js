const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai suhu: ", (suhu) => {
    rl.question("Masukkan suhu asal (C, R, F, K): ", (suhuAsal) => {
    rl.question("Masukkan suhu tujuan (C, R, F, K): ", (suhuTujuan) => {
    
    let hasil = konversiSuhu(parseFloat(suhu), suhuAsal.toUpperCase(), suhuTujuan.toUpperCase());

    console.log(`${suhu} ${suhuAsal} = ${hasil.toFixed(2)} ${suhuTujuan}`);

    rl.close();
    });
    });
});


const konversiSuhu = (suhu, suhuAsal, suhuTujuan) => {

    let hasil;

    if (suhuAsal === "C") {
        if (suhuTujuan === "R") {
            hasil = (4 / 5) * suhu
        } else if (suhuTujuan === "F") {
            hasil = (9 / 5) * suhu + 32
        } else {
            hasil = suhu + 273.15
        }
    } else if (suhuAsal === "R") {
        if (suhuTujuan === "C") {
            hasil = (5 / 4) * suhu
        } else if (suhuTujuan === "F") {
            hasil = (9 / 4) * suhu + 32
        } else {
            hasil = (5 / 4) * suhu + 273.15
        }
    } else if (suhuAsal === "F") {
        if (suhuTujuan === "C") {
            hasil = (5 / 9) * (suhu - 32)
        } else if (suhuTujuan === "R") {
            hasil = (4 / 9) * (suhu - 32)
        } else {
            hasil = (5 / 9) * (suhu - 32) + 273.15
        }
    } else if (suhuAsal === "K") {
        if (suhuTujuan === "C") {
            hasil = suhu - 273.15
        } else if (suhuTujuan === "R") {
            hasil = (4 / 5) * (suhu - 273.15)
        } else {
            hasil = (9 / 5) * (suhu - 273.15) + 32
        }
    } else {
        console.log("Suhu tidak valid")
    return
    };

    return hasil;
};