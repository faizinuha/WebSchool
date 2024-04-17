function buka() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;

  var url =
    "https://wa.me/6281235702123?text=Permisi,%20Nama%20Saya%20" +
    encodeURIComponent(name) +
    "%0A%0A" +
    "name:%15" +
    encodeURIComponent(name) +
    "%0A" +
    "Email:%15" +
    encodeURIComponent(email) +
    "%0A%0A" +
    "subject:%15" +
    encodeURIComponent(subject);


  window.open(url, "_blank");
    alert("Berhasil di Kirim");
}
