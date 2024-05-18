const robitMessages = {
  id: "Halo! Selamat datang di situs kami. Saya Robit, asisten virtual Anda.",
  en: "Hello! Welcome to our site. I am Robit, your virtual assistant.",
  ja: "こんにちは！私たちのサイトへようこそ。私はロビット、あなたのバーチャルアシスタントです。"
};
function initializeTyped(message) {
  new Typed('#robit-message', {
    String: [message],
    textSpeed: 50,
    backSpeed: 30,
    loop: false,
    showcursor: false
  });
}
initializeTyped(robitMessages.id);
document.getElementById('language-select').addEventListener('change', function () {
  const selectedLanguage = this.value;
  if (selectedLanguage === 'id') {
      initializeTyped(robitMessages.id);
  } else if (selectedLanguage === 'en') {
      initializeTyped(robitMessages.en);
  } else if (selectedLanguage === 'ja') {
      initializeTyped(robitMessages.ja);
  }
});