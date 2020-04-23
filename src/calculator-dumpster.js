var operator;
// old calcBtnActions
if (e.target.tagName !== "BUTTON") return;

const val = e.target.innerText;

if (e.target.className.includes("clear")) {
  resetValues();
  updateScreen(0);
}

if (numbers.includes(parseInt(val))) {
  updateValues(val);
  updateScreen(val);
}

if (mathActions.includes(val)) {
  setCalcAction(val);
  updateScreen(0);
}

if (e.target.className.includes("del") && result) {
  document.getElementById(".screen").innerHTML;

  if (screenVal.length > 1) {
    screenVal = screenVal.slice(0, -1);
  } else if (screenVal === 1) {
    screenVal = "0";
  }
}

if (e.target.className.includes("equals") && ready2Calc) {
  switch (operator) {
    case "divide":
      doMath(divide);
      break;
    case "add":
      doMath(add);
      break;
    case "subtract":
      doMath(subtract);
      break;
    case "multiply":
      doMath(multiply);
      break;
  }
  result = true;
}

// misc.

function updateScreen(val) {
  console.log("a =", a, "b =", b, "action = ", operator);
  document.querySelector(".screen").innerText += val;
}

function updateValues(num) {
  if (operator === undefined) {
    a = num;
  }
  if (a != undefined && operator != undefined) {
    b = num;
    ready2Calc = true;
  }
  return;
}

function resetValues() {
  a = undefined;
  b = undefined;
  operator = undefined;
  result = false;

  return;
}

function setCalcAction(action) {
  switch (action) {
    case "/":
    case "÷":
      operator = "divide";
      break;
    case "+":
      operator = "add";
      break;
    case "-":
      operator = "subtract";
      break;
    case "*":
    case "x":
      operator = "multiply";
      break;
  }
  return;
}

function doMath(operation, val) {
  return operation(total, val);
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
