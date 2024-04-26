let container = document.querySelector(".container");
let generate = document.querySelector(".generate");
let colorValue = document.querySelectorAll(".color-text");
let color = document.querySelectorAll(".color");
let colorValueElement = document.querySelectorAll(".color-value");

colorValueElement.forEach((element) => {
  element.addEventListener("click", function () {
    let colorText = this.querySelector(".color-text").textContent;
    copy(colorText);
  });
});

const colorValueSet = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

document.addEventListener("DOMContentLoaded", render());
generate.addEventListener("click", () => {
  render();
});

function generateColor() {
  let colorBarLength = color.length;
  let colorValue = [];
  for (let i = 0; i < colorBarLength; i++) {
    let value = "#";
    for (let j = 0; j < 6; j++) {
      value += colorValueSet[generateRandom()];
    }
    colorValue.push(value);
  }
  return colorValue;
}

function generateRandom() {
  let colorValueLength = colorValueSet.length;
  let random = Math.floor(Math.random() * colorValueLength);
  return random;
}

function copy(text) {
  navigator.clipboard.writeText(text).then(() => {
    window.alert("Color value copied successfully!");
  });
}

function render() {
  let value = generateColor();
  for (let i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = value[i];
    colorValue[i].innerHTML = value[i];
  }
}
