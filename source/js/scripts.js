// кнопка меню(бургер)
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
// кнопка добавить в корзину с вызовом модального окна для catalog.html
let catalogButton = document.querySelectorAll(".product-catalog__button");
let catalogModal = document.querySelector(".catalog-modal--hidden");

for(let catalogButtons of catalogButton) {
  catalogButtons.onclick = function () {
    catalogModal.classList.toggle("catalog-modal--hidden");
  };
}
// кнопка добавить в корзину с вызовом модального окна для index.html
let orderButton = document.querySelector(".make-order-button");
let indexModal = document.querySelector(".catalog-modal--hidden");

orderButton.onclick = function () {
  indexModal.classList.toggle("catalog-modal--hidden");
}
