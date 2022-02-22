"use strict";

const slider = document.getElementById("myRange");
const pageViews = document.querySelector(".pageviews");
const pricing = document.querySelector(".pricing");
const discountLabel = document.querySelector(".discount");
const toggle = document.querySelector(".switch");

let sliderValue = slider.value;

pageViews.textContent = sliderValue;
console.log(sliderValue);

slider.oninput = function () {
  sliderValue = this.value;
  pageViews.textContent = sliderValue;

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

toggle.addEventListener("click", () => {
  const onOff = discountLabel.toggle.classlist(hidden);
});

// const toggleDiscount = function () {
//   if (toggle.checked === true) {
//     discountLabel.style.display = "block";
//     console.log("checked");
//   } else {
//     discountLabel.style.display = "none";
//     console.log("not checked");
//   }
// };
