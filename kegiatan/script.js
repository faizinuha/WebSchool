
// Fungsi untuk menampilkan video berdasarkan ID-nya
function showVideoByID(videoID) {
  // Sembunyikan semua video
  var videos = document.querySelectorAll('iframe');
  videos.forEach(function(video) {
    video.style.display = "none";
  });

  // Tampilkan video dengan ID yang sesuai
  var videoToShow = document.getElementById(videoID);
  if (videoToShow) {
    videoToShow.style.display = "block";
    document.getElementById("error-message").style.display = "none"; // Sembunyikan pesan kesalahan jika video ditemukan
  } else {
    document.getElementById("error-message").innerText = "Video Untuk " + videoID + " tidak ditemukan.";
    document.getElementById("error-message").style.display = "block"; // Tampilkan pesan kesalahan
  }
}

// Fungsi untuk memindahkan elemen video ke posisi baru di area tampilan video
function moveVideoToNewPosition(videoID, newPositionID) {
  // Temukan elemen video berdasarkan ID-nya
  var videoElement = document.getElementById(videoID);

  // Temukan posisi di mana video akan dipindahkan
  var newPosition = document.getElementById(newPositionID);

  // Hapus elemen video dari posisinya saat ini
  videoElement.parentNode.removeChild(videoElement);

  // Masukkan elemen video ke posisi baru
  newPosition.appendChild(videoElement);
}

// Event listener untuk mencari video dengan mengklik tombol pencarian
document.getElementById("search-button").addEventListener("click", function() {
  searchVideo();
});

// Event listener untuk mencari video dengan menekan tombol Enter
document.getElementById("search-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchVideo();
  }
});

// Fungsi untuk mencari video
function searchVideo() {
  var activity = document.getElementById("search-input").value.trim();
  if (activity === "lofi1") {
    showVideoByID("lofi1");
    moveVideoToNewPosition("lofi1", "video-lofi1"); // Pindahkan lofi1 ke sisi kiri 1
  } else if (activity === "lofu1") {
    showVideoByID("lofu1");
    moveVideoToNewPosition("lofu1", "video-lofu1"); // Pindahkan lofu1 ke sisi kanan 2
  } else if(activity === "lofi1"){
    showVideoByID("lofi1");
    moveVideoToNewPosition("lofi1", "video-lofi1"); // Pindahkan lofi1 ke sisi kanan 3
  } else if(activity === "lofu1"){
    showVideoByID("lofu1");
    moveVideoToNewPosition("lofu1", "video-lofu1"); // Pindahkan lofi1 ke sisi kiri 4
  } else {
    document.getElementById("error-message").innerText = "Video untuk " + activity + " tidak ditemukan.";
    document.getElementById("error-message").style.display = "block";
  }
}
