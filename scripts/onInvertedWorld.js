const button = document.querySelector(".switch-theme-button");
const theme = document.querySelector("body");

button.addEventListener("click", changeTheme);

window.addEventListener("click", function () {
  const audio = document.getElementById("music");
  audio.play();
  audio.volume = 0.2;
});

function changeTheme() {
  if (theme.classList.contains("light-theme")) {
    theme.classList.add("dark-theme");
    theme.classList.remove("light-theme");
  } else {
    theme.classList.add("light-theme");
    theme.classList.remove("dark-theme");
  }

  const themeMusic = document.body.classList[0];
  const music =
    themeMusic === "light-theme"
      ? "assets_musics_normal-world.mpeg"
      : "inverted-world.mpeg";

  const audio = document.getElementById("music");
  audio.src = `./musics/${music}`;
  audio.play();
  audio.volume = 0.2;
}
