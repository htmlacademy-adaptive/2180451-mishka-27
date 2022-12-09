let orderButton = document.querySelector(".make-order-button");
let catalogButton = document.querySelectorAll(".product-catalog__button");
let catalogModal = document.querySelector(".catalog-modal--hidden");

orderButton.onclick = function () {
  catalogModal.classList.toggle("catalog-modal--hidden");
}
