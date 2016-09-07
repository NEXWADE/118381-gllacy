var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-content-close");
var map = document.querySelector(".map")



link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    popup.classList.remove("modal-content-hidden");
    overlay.classList.add("modal-overlay-show");
    overlay.classList.remove("modal-overlay-hidden");
});


close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-hide");
    popup.classList.remove("modal-content-show");
    overlay.classList.add("modal-overlay-hide");
    overlay.classList.remove("modal-overlay-show");
});






ymaps.ready(function () {
                        //добавление карты в блок с идентификатором #map
                        var myMap = new ymaps.Map('map', {
                            center: [59.939346,30.329256], //координаты центра карты
                            zoom: 16 //масштаб
                        }, {
                            searchControlProvider: 'yandex#search'
                        });
                        //запрет скроллинга при прокрутке страницы
                        myMap.behaviors.disable('scrollZoom');
                        //создание маркера;
                        var myPlacemark = new ymaps.Placemark ([59.938631,30.323055], {
                            hintContent: 'Магазин Глейси'
                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: 'img/pin.png', //иконка маркера
                            iconImageSize: [80, 140], //размер маркера
                            iconImageOffset: [-40, -142] //смещение маркера
                        });
                        //добавление маркера на карту
                        myMap.geoObjects.add(myPlacemark);
                    });