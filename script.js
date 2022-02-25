"use strict";

const slider = document.getElementById("myRange");
const pageViews = document.querySelector(".pageviews");
const pricing = document.querySelector(".pricing");
const discountLabel = document.querySelector(".discount");
const toggle = document.querySelector(".checkbox");

let sliderValue = slider.value;
console.log(toggle.checked);

let price = 16;
pricing.textContent = price;

pageViews.textContent = sliderValue;

toggle.addEventListener("change", function () {
  let discountPrice = Math.round(price * 0.25);
  if (this.checked) {
    discountLabel.classList.remove("hidden");
    price = price - discountPrice;
  } else {
    discountLabel.classList.add("hidden");
    price = price + discountPrice;
  }
  pricing.textContent = price;
});

slider.oninput = function () {
  sliderValue = this.value;
  pageViews.textContent = sliderValue;

  if (sliderValue <= 49) {
    toggle.checked ? (price = 6) : (price = 8);
  } else if (sliderValue >= 50 && sliderValue <= 99) {
    toggle.checked ? (price = 9) : (price = 12);
  } else if (sliderValue >= 100 && sliderValue <= 499) {
    toggle.checked ? (price = 12) : (price = 16);
  } else if (sliderValue >= 500 && sliderValue <= 999) {
    toggle.checked ? (price = 18) : (price = 24);
  } else if (sliderValue >= 1000) {
    toggle.checked ? (price = 27) : (price = 36);
  }
  console.log(price);
  pricing.textContent = price;
};

// const toggleDiscount = function () {
//   if (toggle.checked === true) {
//     discountLabel.style.display = "block";
//     console.log("checked");
//   } else {
//     discountLabel.style.display = "none";
//     console.log("not checked");
//   }
// };
