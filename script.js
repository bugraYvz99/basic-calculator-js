const display = document.querySelector(".calculator-input");
const buttons = document.querySelector(".calculator-keys");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal-sign");
const decimal = document.querySelector(".decimal");

buttons.addEventListener("click", function (e) {
  const clickedElement = e.target;

  console.log(clickedElement.className);
  if (clickedElement.type == "button") {
    let clickValue = e.target.value;
    display.value += clickValue;
  }
});

equal.addEventListener("click", function (e) {
  if (display.value === 0) {
    display.value = "";
  } else {
    let answer = eval(display.value);
    display.value = answer;
  }
});

clear.addEventListener("click", function (e) {
  display.value = "";
});

function inputDecimal() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}
decimal.addEventListener("click", function (e) {
  inputDecimal();
});
