// Program Nilai Mahasiswa
// Inputan Data
const
    nama = prompt("Masukkan Nama: "),
    tahunMasuk = prompt("Masukkan Tahun Masuk: "),
    kodeProdi = prompt("Masukkan Kode Program Studi : \n {Ket: 51 = Sistem Informasi | 52 Sistem Komputer}"),
    noUrut = prompt("Masukkan Nomor Urut: \n {Ket: 3 digit angka}"),
    jKel = prompt("Masukkan Jenis Kelamin: \n {ket: L = Laki-laki | P = Perempuan}"),
    mataKuliah = prompt("Masukkan Nama Mata Kuliah: "),
    kehadiran = prompt("Masukkan Nilai Kehadiran: \n {Ket: 0 - 100}"),
    tugas = prompt("Masukkan Nilai Tugas: \n {Ket: 0 - 100}"),
    uts = prompt("Masukkan Nilai UTS: \n {Ket: 0 - 100}"),
    uas = prompt("Masukkan Nilai UAS: \n {Ket: 0 - 100}")



const nim = tahunMasuk + kodeProdi + noUrut;


let prodi;
switch (kodeProdi) {
    case "51":
        prodi = "Sistem Informasi"
        break;
    case "52":
        prodi = "Sistem Komputer"
        break;
    default:
        prodi = "Kode Prodi Tidak di terdaftar"
}

let jenisKelamin;
switch (jKel) {
    case "L":
    case "l":
        jenisKelamin = "Laki-Laki";
        break;
    case "P":
    case "p":
        jenisKelamin = "Perempuan";
        break;
    default:
        jenisKelamin = "Kode Jenis Kelamin tidak terdaftar";
}


// Perhitungan Nilai Angka
let nilaiAngka = kehadiran * 0.1 + tugas * 0.2 + uts * 0.3 + uas * 0.4;

// Perhitungan Nilai Huruf
let nilaiHuruf, predikat;
if (nilaiAngka > 85 && nilaiAngka <= 100) {
    nilaiHuruf = "A";
    predikat = "Sangat Memuaskan";
} else if (nilaiAngka > 75 && nilaiAngka <= 85) {
    nilaiHuruf = "B";
    predikat = "Memuaskan";
} else if (nilaiAngka > 60 && nilaiAngka <= 75) {
    nilaiHuruf = "C";
    predikat = "Cukup Memuaskan";
} else if (nilaiAngka > 45 && nilaiAngka <= 60) {
    nilaiHuruf = "D";
    predikat = "Kurang Memuaskan";
} else {
    nilaiHuruf = "E";
    predikat = "Sangat Kurang";
}


// output program
console.log("Nilai Mahasiswa untuk Mata Kuliah " + mataKuliah);
console.log("=========================================================");
console.log("Nama               : " + nama);
console.log("NIM                : " + nim);
console.log("Program Studi      : " + prodi);
console.log("Jenis Kelamin      : " + jenisKelamin);
console.log("Nilai Angka        : " + nilaiAngka);
console.log("Nilai Huruf        : " + nilaiHuruf);
console.log("Predikat           : " + predikat);
console.log("=========================================================");