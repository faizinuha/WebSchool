// Fungsi untuk menerima cookies dan menyimpan informasi perangkat
function acceptCookies() {
  // Mendapatkan informasi perangkat pengguna
  var userDevice = {
    deviceName: navigator.userAgent,
  };

  // Mengonversi informasi perangkat ke dalam JSON
  var userDeviceJSON = JSON.stringify(userDevice);

  // Set cookies untuk cookie_accepted dan user_device
  setCookie("cookie_accepted", "true", 365);
  setCookie("user_device", userDeviceJSON, 365);

  // Menyembunyikan banner cookie
  hideCookieBanner();

  // Menyimpan informasi perangkat ke dalam file
  saveDeviceInfo(userDeviceJSON);
}

// Fungsi untuk menyimpan informasi perangkat ke dalam file
function saveDeviceInfo(deviceInfo) {
  // Di sini Anda dapat menulis kode untuk menyimpan informasi perangkat ke dalam file JSON atau TXT
  // Misalnya, jika Anda ingin menyimpan ke dalam file JSON
  // Anda dapat menggunakan metode penyimpanan lokal di browser atau menyimpannya ke server

  // Contoh: Simpan ke file JSON di penyimpanan lokal browser
  localStorage.setItem("user_device.json", deviceInfo);
}

// Fungsi untuk mengatur cookies
function setCookie(cookieName, cookieValue, expirationDays) {
  var d = new Date();
  d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Fungsi untuk menyembunyikan banner cookie
function hideCookieBanner() {
  document.getElementById("cookie-banner").style.display = "none";
}

// Fungsi untuk memeriksa apakah cookies telah diterima
function checkCookieAccepted() {
  var cookieAccepted = checkCookie("cookie_accepted");
  if (cookieAccepted) {
    hideCookieBanner();
  }
}

// Fungsi untuk memeriksa apakah cookie ada
function checkCookie(cookieName) {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName + "=") == 0) {
      return true;
    }
  }
  return false;
}

// Memanggil fungsi untuk memeriksa apakah cookies telah diterima saat halaman dimuat
window.onload = function () {
  checkCookieAccepted();
};
