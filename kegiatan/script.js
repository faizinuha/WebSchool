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
    document.getElementById("error-message").innerText = "Video untuk " + videoID + " tidak ditemukan.";
    document.getElementById("error-message").style.display = "block"; // Tampilkan pesan kesalahan
    showErrorNotification();
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

// Data video dalam bentuk array of objects
const videoData = [
  { id: "lhaaaa", positionId: "video-lhaaaa" },
  { id: "surup", positionId: "video-surup" },
  { id: "sajen", positionId: "video-sajen" },
  { id: "siul", positionId: "video-siul" },
  { id: "kendil", positionId: "video-kendil" }
];

// Fungsi untuk mencari video
function searchVideo() {
  var activity = document.getElementById("search-input").value.trim();
  const video = videoData.find(v => v.id === activity);
  if (video) {
    showVideoByID(video.id);
    moveVideoToNewPosition(video.id, video.positionId);
  } else {
    document.getElementById("error-message").innerText = "Video untuk " + activity + " tidak ditemukan.";
    document.getElementById("error-message").style.display = "block";
    showErrorNotification();
  }
}

// Fungsi untuk menampilkan notifikasi error
function showErrorNotification() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Video tidak ditemukan. Silakan coba lagi!",
    footer: '<a href="/struktur/bot/bot.html">Mengapa saya memiliki masalah ini?</a>'
  });
}
