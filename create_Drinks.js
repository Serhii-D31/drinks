const sugarValue = document.querySelectorAll("[type = radio]");
const modal = document.querySelector(".modal");

// Start speed test
console.time("speed test");

// Make render
createCoffee();
createAlcohol();

// End speed test
console.timeEnd("speed test");

Drink.prototype.getInfo = function () {
  let output = `<div class="chose-container">
  <img class="choseImage" src="${this.img}" alt="ava" />
  <h2 class="choseTitle">${this.title.toUpperCase()}</h2>
  <span class="chosePrice">${this.price}</span>
</div>`;

  modal.innerHTML = output;

  barRange.coffee.forEach((el) => {
    el.title === this.title ? sugarCalc() : false;
  });
};

document.querySelectorAll(".drink").forEach(function (el) {
  el.addEventListener("click", function () {
    let buttonInnerText = this.innerText.toLowerCase();
    let currentDrink = "";
    if (
      (currentDrink = barRange.coffee.find(function (el) {
        return el.title === buttonInnerText;
      }))
    ) {
      onItemClick(currentDrink);
    } else if (
      (currentDrink = barRange.alcohol.find(function (el) {
        return el.title === buttonInnerText;
      }))
    ) {
      sugarValue.forEach((el) => {
        el.checked = false;
      });
      onItemClick(currentDrink);
    }
  });
});

function createCoffee() {
  let output = "";
  barRange.coffee.forEach((el) => {
    output += `<div class="button-cont">
    <div class="drink coffee" style = "background: center / cover no-repeat url(${
      el.img
    })">
    <h3>${el.title.toUpperCase()}</h3>
    </div>
    </div>`;
  });
  document.querySelector(".coffee-set").innerHTML = output;
  output = "";
}
function createAlcohol() {
  let output = "";
  barRange.alcohol.forEach((el) => {
    output += `<div class="button-cont" >
      <div class="drink alcohol" style = "background: center / cover no-repeat url(${
        el.img
      })">
      <h3>${el.title.toUpperCase()}</h3>
      </div>
    </div>`;
  });
  document.querySelector(".alcohol-set").innerHTML = output;
}
function sugarCalc() {
  sugarValue.forEach(function (el) {
    if (el.checked && el.value == 0) {
      document.querySelector(".chosePrice").innerHTML += " sugarless";
      el.checked = false;
    } else if (el.checked && el.value != 0) {
      sugarPrice *= Number(el.value);
      document.querySelector(".chosePrice").innerHTML +=
        " and " + sugarPrice + "💲 for sugar.";
      sugarPrice = 0.25;
      el.checked = false;
    }
  });
}

// Open modal
function openModalWindow() {
  document.querySelector(".backdrop").hidden = false;
  modal.style.left =
    "calc((" +
    (document.documentElement.clientWidth - modal.offsetWidth) +
    "px) / 2)";
  modal.style.top =
    "calc((" +
    (document.documentElement.clientHeight - modal.offsetHeight) +
    "px) / 2)";
  modal.style.visibility = "visible";
  document.body.style.overflow = "hidden";
  document.querySelector(".backdrop").addEventListener("click", onOverlayClick);
  window.addEventListener("keydown", onKeysPress);
}

function onItemClick(el) {
  el.getInfo();
  openModalWindow();
}

function onOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModalWindow();
  }
}

function onKeysPress(evt) {
  if (evt.code === "Escape") {
    closeModalWindow();
  }
}

// // Close modal
function closeModalWindow() {
  document.querySelector(".backdrop").hidden = true;
  modal.style.visibility = "hidden";
  document.body.style.overflow = "auto";
  document
    .querySelector(".backdrop")
    .removeEventListener("click", onOverlayClick);
  window.removeEventListener("keydown", onKeysPress);
  modal.innerHTML = "";
}
