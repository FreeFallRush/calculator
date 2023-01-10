let firstValue = "";
let secondValue = "";
let operation = "";
let result = "";
let displayValue = 0;

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("clear");
const decimalPoint = document.getElementById("decimal-point");
const clearAll = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const currentDisplay = document.getElementById("current");
currentDisplay.textContent = displayValue;

//add event listeners
numbers.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    manageNumbers(e.target.textContent);
  });
});

operators.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    manageOperators(e.target.textContent);
  });
});

//
function manageNumbers(num) {
  if (result && operation === "") {
    return false;
  } else if (operation === "" && firstValue === "0") {
    firstValue = num;
    currentDisplay.textContent = firstValue;
  } else if (operation === "" && firstValue.toString().length < 9) {
    firstValue += num;
    currentDisplay.textContent = firstValue;

    if (firstValue.toString().length >= 9) {
      currentDisplay.textContent = `Number too long!`;
    }
  }

  if ((secondValue === "" || secondValue === "0") && operation) {
    secondValue = num;
    currentDisplay.textContent = secondValue;
  } else if (secondValue && secondValue.toString().length < 9) {
    secondValue += num;
    currentDisplay.textContent = secondValue;

    if (secondValue.toString().length >= 9) {
      currentDisplay.textContent = `Number too long!`;
    }
  }
}

//rounding number to 3 decimals
function roundNum(calculation) {
  return Math.round(calculation * 1000) / 1000;
}

//calculations
function add(a, b) {
  let outcome = roundNum(Number(a) + Number(b));
  currentDisplay.textContent = outcome;
  result = outcome;
  firstValue = "";
  secondValue = "";
  operation = "";
}

function subtract(a, b) {
  let outcome = roundNum(Number(a) - Number(b));
  currentDisplay.textContent = outcome;
  result = outcome;
  firstValue = "";
  secondValue = "";
  operation = "";
}

function multiply(a, b) {
  let outcome = roundNum(Number(a) * Number(b));
  currentDisplay.textContent = outcome;
  result = outcome;
  firstValue = "";
  secondValue = "";
  operation = "";
}

function divide(a, b) {
  if (Number(b) === 0) {
    let outcome = `That's a NO NO!`;
    currentDisplay.textContent = outcome;
    result = outcome;
  } else {
    let outcome = roundNum(Number(a) / Number(b));
    currentDisplay.textContent = outcome;
    result = outcome;
    firstValue = "";
    secondValue = "";
    operation = "";
  }
}
