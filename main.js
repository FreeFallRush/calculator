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
