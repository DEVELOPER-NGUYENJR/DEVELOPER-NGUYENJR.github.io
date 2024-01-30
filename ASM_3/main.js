"use strict";

// Variables
const submit = document.querySelector("#submit-button");
const moreInfo = document.querySelector(".more-info");
const form = document.querySelector(".form");
const viewLess = document.querySelectorAll(".view-more");
const jobContent = document.querySelectorAll(".body");
const inputText = document.getElementById("email-input");

// Email validation function
const validateEmail = function () {
  let emailFormat =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (inputText.value.match(emailFormat)) {
    moreInfo.classList.remove("hide");
    form.classList.add("hide");
    return true;
  } else {
    alert("Invalid email address!!!!");
    return false;
  }
};

// Button's function in section "Job-info"
for (let i = 0; i < viewLess.length; i++) {
  viewLess[i].addEventListener("click", function () {
    if (jobContent[i].classList.contains("hide")) {
      viewLess[i].innerHTML = "▲ View Less";
      jobContent[i].classList.remove("hide");
    } else {
      viewLess[i].innerHTML = "▼ View More";
      jobContent[i].classList.add("hide");
    }
  });
}
