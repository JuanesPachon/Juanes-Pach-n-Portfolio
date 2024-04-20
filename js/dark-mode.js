const darkBotton = document.querySelector(".right-container__dark-mode");
const lightBotton = document.querySelector(".right-container__light-mode");

const darkBotton2 = document.querySelector(".right-container__dark-mode2");
const lightBotton2 = document.querySelector(".right-container__light-mode2");

const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
  // event that will act just when the html loads without waiting the CSS
  const darkModeEnabled = localStorage.getItem("darkModeEnabled"); // localstorage saves things in "cache"
  if (darkModeEnabled) {
    toggleDarkMode();
  }
});

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  toggleAction();
}

function toggleAction() {
  const isDarkMode = body.classList.contains("dark-mode");

  if (isDarkMode) {
    darkBotton.style.display = "none";
    lightBotton.style.display = "inline";
    darkBotton2.style.display = "none";
    lightBotton2.style.display = "inline";
    localStorage.setItem("darkModeEnabled", true);
  } else {
    lightBotton.style.display = "none";
    darkBotton.style.display = "inline";
    lightBotton2.style.display = "none";
    darkBotton2.style.display = "inline";
    localStorage.removeItem("darkModeEnabled");
  }
}


