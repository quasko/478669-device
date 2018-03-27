var linkForm = document.querySelector(".write-us-link");
var popupForm = document.querySelector(".modal-write-us");
var closeForm = popupForm.querySelector(".modal-close");
var form = popupForm.querySelector("form");
var userName = popupForm.querySelector("[name=name]");
var userEmail = popupForm.querySelector("[name=email]");
var userText = popupForm.querySelector("[name=text]");
var isStorageSupport = true;
var storage = {
  name: "",
  email: ""
};

try {
  storage.name = localStorage.getItem("userName");
  storage.email = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

linkForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.add("modal-show");
  if (storage.name) {
    userName.value = storage.name;
    if (storage.email) {
      userEmail.value = storage.email;
      userText.focus();
    } else {
      userEmail.focus();
    };
  } else {
    userName.focus();
  }
});

closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.remove("modal-show");
  popupForm.classList.remove("modal-error");
});

closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    popupForm.classList.remove("modal-error");
    popupForm.offsetWidth = popupForm.offsetWidth;
    popupForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupForm.classList.contains("modal-show")) {
      popupForm.classList.remove("modal-show");
      popupForm.classList.remove("modal-error");
    }
  }
});

var linkMap = document.querySelector(".contacts-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});
/*
window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});*/

var sliders = document.querySelectorAll(".slider-item");
var slidersNav = document.querySelectorAll(".slider-checkbox");

slidersNav[0].addEventListener("click", function(){
  for(var j = 0; j < sliders.length; j++) {
    sliders[j].classList.remove("slider-show");
  }
  sliders[0].classList.add("slider-show");
});

slidersNav[1].addEventListener("click", function(){
  for(var j = 0; j < sliders.length; j++) {
    sliders[j].classList.remove("slider-show");
  }
  sliders[1].classList.add("slider-show");
});

slidersNav[2].addEventListener("click", function(){
  for(var j = 0; j < sliders.length; j++) {
    sliders[j].classList.remove("slider-show");
  }
  sliders[2].classList.add("slider-show");
});

var services = document.querySelectorAll(".services-description > div");
var servicesNav = document.querySelectorAll(".services-tab");

servicesNav[0].addEventListener("click", function(evt){
  evt.preventDefault();
  for(var j = 0; j < sliders.length; j++) {
    services[j].classList.remove("service-show");
    servicesNav[j].classList.remove("current");
  }
  services[0].classList.add("service-show");
  servicesNav[0].classList.add("current");
});

servicesNav[1].addEventListener("click", function(evt){
  evt.preventDefault();
  for(var j = 0; j < sliders.length; j++) {
    services[j].classList.remove("service-show");
    servicesNav[j].classList.remove("current");
  }
  services[1].classList.add("service-show");
  servicesNav[1].classList.add("current");
});

servicesNav[2].addEventListener("click", function(evt){
  evt.preventDefault();
  for(var j = 0; j < sliders.length; j++) {
    services[j].classList.remove("service-show");
    servicesNav[j].classList.remove("current");
  }
  services[2].classList.add("service-show");
  servicesNav[2].classList.add("current");
});
