const celebrateButton = document.querySelector("#celebrate-button");
const message = document.querySelector("#message");

celebrateButton.addEventListener("click", () => {
  celebrateButton.textContent = "Harika bir başlangıç! ✓";
  celebrateButton.classList.add("completed");
  message.textContent = "Bu butonu Ali Efe JavaScript ile çalıştırdı! 🚀";
});
