// select Tombol Hitung
var calculate = document.querySelector('.calculate');

// Untuk Menambahkan Event
calculate.addEventListener('click', findBMI);

// Fungsi untuk menghitung BMI
function findBMI() {
  var height = +document.querySelector('#height').value;
  var weight = +document.querySelector('#weight').value;
  // check height & weight are a valid number
  if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
    alert('Harap isi semua kolom dengan angka yang valid');
    return;
  }
  // Konversi Tinggi Badan Kedalam Bentuk Meter (m)
  height = height / 100;
  var bmi = weight / (height * height);
  showResult(bmi);
}

// Fungsi Untuk Menampilkan Hasil
function showResult(bmi) {
  var result = document.querySelector('.result');
  var bmiStatus;
  if (bmi < 18.5) {
    bmiStatus = 'Berat Badan Kurang, Perbanyak Makan';
  } else if (bmi < 25) {
    bmiStatus = 'Normal, Sehat';
  } else if (bmi < 30) {
    bmiStatus = 'Kelebihan Berat Badan, Anda Harus Mulai Olahraga';
  } else {
    bmiStatus = 'Gendut, Terlalu Subur (SEGERA OLAHRAGA BIAR SEHAT !!!)';
  }
  result.innerHTML = `<div class=${bmiStatus}>Hasil perhitungan BMI ${bmi.toFixed(2)} dan Anda ${bmiStatus}.</div>`;
}


