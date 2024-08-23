const darkModeToggle = document.querySelector("#dark-mode-toggle");
const countryCards = document.querySelectorAll(".flag-card");
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  countryCards.forEach((card) => {
    card.classList.toggle("dark-mode");
  });
}
darkModeToggle.addEventListener("click", toggleDarkMode);
