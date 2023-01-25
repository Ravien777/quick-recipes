const mobile_menu = document.querySelector(".header-secondary");
const header_right = document.querySelector(".header-main .right");
const menu_btn = document.getElementById("toggle-mobile-menu");
const scrollY = document.body.style.top;
let menuOpen = false;

document.getElementById("search_form_div").addEventListener("click", () => {
  document.getElementById("search_recipes").focus();
});

menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("open");
  mobile_menu.classList.toggle("is-active");
  header_right.classList.toggle("not-visible");
  menuOpen = !menuOpen;
  if (menuOpen) {
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
});
