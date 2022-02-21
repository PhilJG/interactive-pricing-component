"use strict";

const slider = document.getElementById("myRange");
const pageViews = document.querySelector(".pageviews");
const pricing = document.querySelector(".pricing");
let sliderValue = slider.value;

pageViews.textContent = sliderValue;

slider.oninput = function () {
  sliderValue = this.value;
  if (sliderValue <= 49) {
    pricing.textContent = 8;
  } else if (sliderValue >= 50 && sliderValue <= 99) {
    pricing.textContent = 12.0;
  } else if (sliderValue >= 100 && sliderValue <= 499) {
    pricing.textContent = 16.0;
  } else if (sliderValue >= 500 && sliderValue <= 999) {
    pricing.textContent = 24.0;
  } else if (sliderValue >= 1000) {
    pricing.textContent = 36.0;
  }
};
