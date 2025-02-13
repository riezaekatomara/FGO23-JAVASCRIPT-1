function hitungDiskon(totalPembelian) {
    let diskon = 0;
    if (totalPembelian < 500000) {
        diskon = 0;
    } else if (totalPembelian >= 500000 && totalPembelian <= 1000000) {
        diskon = totalPembelian * 0.05;
    } else if (totalPembelian > 1000000) {
        diskon = totalPembelian * 0.10;
    }

    return diskon;
}

let totalPembelian = 1200000;

let diskon = hitungDiskon(totalPembelian);
let totalBayar = totalPembelian - diskon;

console.log("Total Pembelian: Rp" + totalPembelian.toLocaleString());
console.log("Diskon: Rp" + diskon.toLocaleString());
console.log("Total Bayar: Rp" + totalBayar.toLocaleString());