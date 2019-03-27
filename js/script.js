var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

var maplink = document.querySelector(".index-map");
var mappopup = document.querySelector(".modal-map");
var mapclose = mappopup.querySelector(".modal-close");

maplink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.add("modal-show");
});
mapclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.remove("modal-show");
});
