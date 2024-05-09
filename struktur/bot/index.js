document.addEventListener("DOMContentLoaded", function() {
  // Function to send a message
  function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatHistory = document.getElementById("chat-history");

    // Clear chat if userInput contains "reset"
    if (userInput.toLowerCase().includes("reset")) {
      resetChat();
      return;
    }
    
    // Add user's message to chat history
    var userMessageElement = document.createElement("div");
    userMessageElement.className = "outgoing-msg";
    var userBubbleElement = document.createElement("div");
    userBubbleElement.className = "chat-bubble outgoing-bubble";
    userBubbleElement.textContent = userInput;
    userMessageElement.appendChild(userBubbleElement);
    chatHistory.appendChild(userMessageElement);

    // Bot responds based on user's input
    var botReplyElement = document.createElement("div");
    botReplyElement.className = "incoming-msg";
    var botBubbleElement = document.createElement("div");
    botBubbleElement.className = "chat-bubble incoming-bubble";

    // Bot response logic
    var botResponse = getBotResponse(userInput);
    botBubbleElement.textContent = "Bot: " + botResponse;

    botReplyElement.appendChild(botBubbleElement);
    chatHistory.appendChild(botReplyElement);

    // Clear input after sending message
    document.getElementById("user-input").value = "";

    // Scroll to bottom on new message
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  // Function to reset chat
  function resetChat() {
    document.getElementById("chat-history").innerHTML = ""; // Clear all messages in chatHistory
  }

  // Function to get bot's response based on user's input
  function getBotResponse(userInput) {
    // Example bot response logic
    if (userInput.toLowerCase().includes("halo")) {
      return "Halo! Ada yang bisa saya bantu?";
    } else if (userInput.toLowerCase().includes("informasi")) {
      return "Silakan sampaikan informasi yang Anda butuhkan.";
    } else {
      return "Maaf, saya tidak mengerti. Mohon sampaikan pertanyaan Anda dengan lebih jelas.";
    }
  }

  // Add event listener to "Send" button
  document.getElementById("send-btn").addEventListener("click", sendMessage);

  // Add event listener to send message when "Enter" is pressed
  document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});