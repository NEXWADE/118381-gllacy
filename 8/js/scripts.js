var link = document.querySelector(".contacts-btn");
var feedback = document.querySelector(".feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".feedback .close");
var map = document.querySelector(".map");

link.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.add("feedback-show");
    overlay.classList.add("overlay-show");
});


close.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.remove("feedback-show");
    feedback.classList.remove("error");
    overlay.classList.remove("overlay-show");
});

ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
        center: [59.939346, 30.329256],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });
    myMap.behaviors.disable('scrollZoom');
    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
        hintContent: 'Магазин Глейси'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin.png',
        iconImageSize: [80, 140],
        iconImageOffset: [-40, -142]
    });
    myMap.geoObjects.add(myPlacemark);
});

