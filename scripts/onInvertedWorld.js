const button = document.querySelector(".switch-theme-button");
const theme = document.querySelector("body");

button.addEventListener("click", changeTheme);

function changeTheme() {
  if (theme.classList.contains("light-theme")) {
    theme.classList.add("dark-theme");
    theme.classList.remove("light-theme");
  } else {
    theme.classList.add("light-theme");
    theme.classList.remove("dark-theme");
  }
}
