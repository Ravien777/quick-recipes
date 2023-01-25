// const container = document.querySelector(".container");
// const open_menu = document.querySelector(".open-menu");
// const close_menu = document.querySelector(".close-menu");
// const front_card = document.querySelector(".card-front");
// const back_card = document.querySelector(".card-back");
// open_menu.addEventListener("click", function () {
//   container.classList.add("is-flipped");
// });

// close_menu.addEventListener("click", function () {
//   container.classList.remove("is-flipped");
// });

const mobile_menu = document.querySelector(".header-secondary");
const header_right = document.querySelector(".header-main .right");
const menu_btn = document.getElementById("toggle-mobile-menu");

document.getElementById("search_form_div").addEventListener("click", () => {
  document.getElementById("search_recipes").focus();
});

menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("open");
  mobile_menu.classList.toggle("is-active");
  header_right.classList.toggle("not-visible");
});
