let contactsMap = document.querySelector(".contacts__map");

contactsMap.classList.add("contacts__map--js");

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("ymap", {
    center: [59.93868391814912, 30.323031977538637],
    zoom: 16,
    controls: []
  }, {
    suppressMapOpenBlock: true
  }, {
    searchControlProvider: "yandex#search"
  }),
  myPlacemark = new ymaps.Placemark(([59.93868391814912, 30.323031977538637]), {

  }, {
    iconLayout: "default#image",
    iconImageHref: "img/index-img/map-pin.svg",
    iconImageSize: [67, 100],
    iconImageOffset: [-32, -100]
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.options.set("scrollZoomSpeed", 1);
};
