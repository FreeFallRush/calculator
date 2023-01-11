let firstValue = "";
let secondValue = "";
let operation = "";
let result = "";
let displayValue = 0;

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById("equals");
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

equal.addEventListener("click", manageEqual);
clearAll.addEventListener("click", clear);
decimalPoint.addEventListener("click", addDecimal);
deleteBtn.addEventListener("click", deleteLast);

//
function manageNumbers(num) {
  if (result && operation === "") {
    return false;
  } else if (
    (result === `That's a NO NO!` || result === Infinity) &&
    operation
  ) {
    clear();
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

function manageOperators(op) {
  if (
    currentDisplay.textContent === `That's a NO NO!` ||
    currentDisplay.textContent === Infinity
  ) {
    clear();
  } else if (result && operation && secondValue) {
    calculate(result, operation, secondValue);
    currentDisplay.textContent = result + op;
    operation = op;
  } else if (firstValue && operation && secondValue) {
    calculate(firstValue, operation, secondValue);
    currentDisplay.textContent = result + "" + op;
    operation = op;
  } else if (firstValue === "" && result === "") {
    return false;
  } else {
    if (firstValue) {
      operation = op;
      currentDisplay.textContent = firstValue + "" + op;
    } else {
      currentDisplay.textContent = result + "" + op;
      operation = op;
    }
  }
}

function manageEqual() {
  if (secondValue === "") {
    return false;
  } else if (result === "") {
    calculate(firstValue, operation, secondValue);
  } else {
    calculate(result, operation, secondValue);
  }
}

function clear() {
  firstValue = "";
  secondValue = "";
  operation = "";
  result = "";
  currentDisplay.textContent = displayValue;
}

function addDecimal() {
  if (firstValue === "" && result === "") {
    firstValue = "0.";
    currentDisplay.textContent = firstValue;
  } else if (firstValue && operation === "") {
    if (!firstValue.includes(".")) {
      firstValue += ".";
      currentDisplay.textContent = firstValue;
    }
  } else if (firstValue && operation && secondValue === "") {
    secondValue = "0.";
    currentDisplay.textContent = secondValue;
  } else if (secondValue) {
    if (!secondValue.includes(".")) {
      secondValue += ".";
      currentDisplay.textContent = secondValue;
    }
  } else if (result && operation && secondValue === "") {
    secondValue = "0.";
    currentDisplay.textContent = secondValue;
  }
}

function deleteLast() {
  if (firstValue && operation === "") {
    let sliced = firstValue.slice(0, -1);
    firstValue = sliced;
    currentDisplay.textContent = firstValue;
  } else if (firstValue && operation && secondValue === "") {
    operation = "";
    currentDisplay.textContent = firstValue;
  } else if (operation && secondValue) {
    let sliced = firstValue.slice(0, -1);
    firstValue = sliced;
    currentDisplay.textContent = firstValue;
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

function calculate(a, operator, b) {
  if (operator === "+") {
    add(a, b);
  } else if (operator === "-") {
    subtract(a, b);
  } else if (operator === "x") {
    multiply(a, b);
  } else if (operator === "÷") {
    if (b === "0") {
      result = `That's a NO NO!`;
      currentDisplay.textContent = `That's a NO NO!`;
    } else {
      divide(a, b);
    }
  } else if (operator === "=") {
    manageEqual();
  }
}

//keyboard support
const operatorsConvertor = {
  "/": "÷",
  "*": "x",
  "+": "+",
  "-": "-",
};

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9"
  ) {
    manageNumbers(e.key);
  } else if (e.key in operatorsConvertor) {
    manageOperators(operatorsConvertor[e.key]);
  } else if (e.key === ".") {
    addDecimal(e.key);
  } else if (e.key === "Backspace") {
    deleteLast(e.key);
  }
});
