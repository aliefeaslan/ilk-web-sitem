const celebrateButton = document.querySelector("#celebrate-button");
const message = document.querySelector("#message");

celebrateButton.addEventListener("click", () => {
  celebrateButton.textContent = "Harika bir başlangıç! ✓";
  celebrateButton.classList.add("completed");
  message.textContent = "Bu butonu Ali Efe JavaScript ile çalıştırdı! 🚀";
});

const themeButton = document.querySelector("#theme-button");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeButton.textContent = "Koyu temaya geç";
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");



  const lightThemeIsActive =
    document.body.classList.contains("light-theme");
localStorage.setItem(
  "theme",
  lightThemeIsActive ? "light" : "dark"
);
  themeButton.textContent = lightThemeIsActive
    ? "Koyu temaya geç"
    : "Açık temaya geç";
});