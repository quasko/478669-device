var linkForm = document.querySelector(".write-us-link");
var popupForm = document.querySelector(".modal-write-us");
var closeForm = popupForm.querySelector(".modal-close");
var form = popupForm.querySelector("form");
var userName = popupForm.querySelector("[name=name]");
var userEmail = popupForm.querySelector("[name=email]");
var userText = popupForm.querySelector("[name=text]");
var linkMap = document.querySelector(".contacts-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");
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
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

var sliders = document.querySelectorAll(".slider-item");
var slidersNav = document.querySelector(".slider-nav");
slidersNav.addEventListener("click",function(evt){
  var target = evt.target;
  if(target.classList.contains("slider-checkbox")) {
    var slideNum = target.id.split('-')[1];
    console.log(slideNum);
    for(var j = 0; j < sliders.length; j++) {
      sliders[j].classList.remove("slider-show");
    }
    sliders[slideNum-1].classList.add("slider-show");
  }
});

var services = document.querySelectorAll(".services-description > div");
var servicesNav = document.querySelector(".services-nav");
var servicesTab = document.querySelectorAll(".services-tab");

servicesNav.addEventListener("click",function(evt){
  evt.preventDefault();
  var target = evt.target;
  if(target.classList.contains("services-link")) {
    var parentLi = target.parentElement;
      for(var j = 0; j < services.length; j++) {
        services[j].classList.remove("service-show");
        servicesTab[j].classList.remove("current");
      }
      var serviceDescriptionSelector = ".services-description-" + target.id.split('-')[0];
      var serviceDescriptionBlock = document.querySelector(serviceDescriptionSelector);
      serviceDescriptionBlock.classList.add("service-show");
      parentLi.classList.add("current");
  }
});
