let menuButton = document.querySelector(".main-nav__toggle");
let menuPopover = document.querySelector(".main-nav__wrapper--popover");

menuButton.onclick = function () {
  menuPopover.classList.toggle("main-nav__wrapper--popover");
  menuButton.classList.toggle("main-nav__toggle--active");
}
