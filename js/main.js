const container = document.querySelector(".container");
const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close-menu");
open_menu.addEventListener("click", function () {
  container.classList.add("is-flipped");
});

close_menu.addEventListener("click", function () {
  container.classList.remove("is-flipped");
});
