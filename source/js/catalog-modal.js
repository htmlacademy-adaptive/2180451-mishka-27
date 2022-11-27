let catalogButton = document.querySelectorAll(".product-catalog__button");
let catalogModal = document.querySelector(".catalog-modal--hidden");

for(let catalogButtons of catalogButton) {
  catalogButtons.onclick = function () {
    catalogModal.classList.toggle("catalog-modal--hidden");
  };
}
