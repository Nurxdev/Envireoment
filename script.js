let line = document.querySelector(".navbar .ri-menu-line");
let menu = document.querySelector(".navbar ul");

line.addEventListener("click", () => {
  menu.classList.toggle("showmenu");
});
