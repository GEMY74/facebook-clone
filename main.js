let settingsMenu = document.querySelector(".setting-menu");
let darkMode = document.getElementById("dark-btn");

function settingsMenuToggle() {
  settingsMenu.classList.toggle("show-height");
}

function dark() {
  darkMode.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

if (localStorage.getItem("theme") == "light") {
  darkMode.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkMode.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
