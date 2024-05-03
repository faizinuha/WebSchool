var date = new Date();
var hours = date.getHours();

var greetings = [
  "Selamat Malam!",
  "Selamat Pagi!",
  "Selamat Siang!",
  "Selamat Sore!",
  "Selamat Malam Semuanya!"
];

var timePeriod = Math.floor(hours / 6); // Divide 24-hour day into 4 segments
var greeting = greetings[timePeriod]; // Assign greeting based on time period

var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

var day = date.getDate();
var month = date.getMonth();
var thisDay = date.getDay();
thisDay = myDays[thisDay];

var year = date.getFullYear();

var info = greeting + "<br>" + thisDay + ", " + day + ' ' + months[month] + ' ' + year;
document.getElementById('warna').innerHTML = info;

// Tambahkan event listener untuk menampilkan alert saat cursor diarahkan ke elemen tersebut
document.getElementById('warna').addEventListener('mouseover', function() {
  var alertInfo = info.replace("<br>", ", ");
  alert(alertInfo);
});
