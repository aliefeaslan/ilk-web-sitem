const celebrateButton = document.querySelector("#celebrate-button");
const message = document.querySelector("#message");

celebrateButton.addEventListener("click", () => {
  celebrateButton.textContent = "Harika bir başlangıç! ✓";
  celebrateButton.classList.add("completed");
  message.textContent = "Bu butonu Ali Efe JavaScript ile çalıştırdı! 🚀";
});

const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const lightThemeIsActive =
    document.body.classList.contains("light-theme");

  themeButton.textContent = lightThemeIsActive
    ? "Koyu temaya geç"
    : "Açık temaya geç";
});