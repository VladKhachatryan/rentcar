const lightMode = document.querySelector("#light_mode");
const darkMode = document.querySelector("#dark_mode");
const body = document.querySelector("body");

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

body.setAttribute("data-theme", localStorage.getItem("theme"));

darkMode.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  body.setAttribute("data-theme", localStorage.getItem("theme"));
  if ((darkMode.style.display = "block")) {
    lightMode.style.display = "block";
    darkMode.style.display = "none";
  }
});

lightMode.addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  body.setAttribute("data-theme", localStorage.getItem("theme"));
  if ((lightMode.style.display = "block")) {
    darkMode.style.display = "block";
    lightMode.style.display = "none";
  }
});
