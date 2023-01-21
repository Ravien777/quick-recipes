const container = document.querySelector(".container");
const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close-menu");
const front_card = document.querySelector(".card-front");
const back_card = document.querySelector(".card-back");
open_menu.addEventListener("click", function () {
  container.classList.add("is-flipped");
});

close_menu.addEventListener("click", function () {
  container.classList.remove("is-flipped");
});
