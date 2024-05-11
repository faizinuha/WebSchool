document.addEventListener("DOMContentLoaded", function () {
  var chatHistory = document.getElementById("chat-history");

  // Fungsi untuk mengirim pesan
  function sendMessage(message) {
    var now = new Date();
    var dateString = now.toLocaleDateString();
    var timeString = now.toLocaleTimeString();
    var fullDateString = dateString + " " + timeString;
    var userMessageElement = document.createElement("div");
    userMessageElement.className = "user-message";
    userMessageElement.innerHTML =
      '<div class="date-divider">' + fullDateString + "</div>" +
      '<div class="outgoing-bubble chat-bubble">' +
      '<i class="bi bi-person-fill user-icon"></i>' +
      message +
      "</div>";
    chatHistory.appendChild(userMessageElement);

    var botResponse = getBotResponse(message);
    var botReplyElement = document.createElement("div");
    botReplyElement.className = "incoming-msg";
    var botBubbleElement = document.createElement("div");
    botBubbleElement.className = "chat-bubble incoming-bubble";
    botBubbleElement.innerHTML =
      '<i  class="bi bi-chat-dots bot-icon"></i>' + botResponse;
    botReplyElement.appendChild(botBubbleElement);
    chatHistory.appendChild(botReplyElement);

    document.getElementById("user-input").value = "";
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  function getBotResponse(userInput) {
    if (userInput.toLowerCase().includes("permisi")) {
      return "Halo! Ada yang bisa saya bantu?";
    } else if (userInput.toLowerCase().includes("mau tanya")) {
      return "Apa yang ingin Anda tanyakan?";
    } else if (
      userInput.toLowerCase().includes("apa saja jurusan yang tersedia")
    ) {
      return "Baiklah, Ini adalah Jurusan yang Tersedia di Sekolah Kami: RPL, TKJ, TKR, TB, AK";
    } else if (
      userInput.toLowerCase().includes("bagaimana proses pendaftaran")
    ) {
      return "Pendaftaran di sekolah kami sangat Mudah dan Praktis. Tinggal klik di sini atau kunjungi smkalazhar.vercel.app/";
    } else {
      return "Maaf, saya tidak mengerti. Mohon sampaikan pertanyaan Anda dengan lebih jelas.";
    }
  }

  // Fungsi untuk menghapus riwayat obrolan
  function resetChatHistory() {
    chatHistory.innerHTML = ""; // Menghapus semua elemen dalam riwayat obrolan
  }

  document.getElementById("send-btn").addEventListener("click", function() {
    var userInput = document.getElementById("user-input").value;
    sendMessage(userInput);
  });

  document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      var userInput = document.getElementById("user-input").value;
      sendMessage(userInput);
    }
  });

  var listItems = document.querySelectorAll(".list-item");
  listItems.forEach(function(item) {
    item.addEventListener("click", function() {
      var message = item.innerText;
      sendMessage(message);
    });
  });

  // Menambahkan event listener ke tombol "Reset"
  document.getElementById("reset-btn").addEventListener("click", function() {
    resetChatHistory(); 
  });
});
