import React from "react";

// TODOs:
// 0. Update Event Listener for React
// 1. Add support for floating #s
// 2. Add support for -/+
// 3. Add support for %
// 4. Add support for keypad
// 5. Update look / Add polish
const Calculator = () => {
  let total = 0;
  let buffer = "0";
  let operator = null;

  function manageMath(value) {
    if (buffer === "0") return;

    const intBuffer = parseInt(buffer);

    if (total === 0) {
      total = intBuffer;
    } else {
      doMath(intBuffer);
    }

    operator = value;
    buffer = "0";
  }

  function doMath(intVal) {
    switch (operator) {
      case "+":
        total += intVal;
        break;
      case "-":
        total -= intVal;
        break;
      case "÷":
        total /= intVal;
        break;
      case "x":
        total *= intVal;
        break;
    }
  }

  function btnSymbol(val) {
    switch (val.toLowerCase()) {
      case "c":
        total = 0;
        operator = null;
        buffer = "0";
        break;
      case "=":
        if (operator === null) return;
        doMath(Number(buffer));
        buffer = "" + total;
        total = 0;
        operator = null;
        break;
      case "←":
        if (buffer === "0") {
          return;
        } else if (buffer.length === 1) {
          buffer = "0";
        } else {
          buffer = buffer.slice(0, -1);
        }
        break;
      default:
        manageMath(val);
        break;
    }
  }

  function btnNumber(val) {
    if (buffer === "0") {
      buffer = val;
    } else {
      buffer += val;
    }
  }

  function calcBtnAction(val) {
    if (isNaN(parseInt(val))) {
      btnSymbol(val);
    } else {
      btnNumber(val);
    }

    document.querySelector(".screen").innerText = buffer;
  }

  return (
    <section className="calc-container">
      <div className="screen">{buffer}</div>
      <div
        className="numPad"
        onClick={(e) => {
          calcBtnAction(e.target.innerText);
        }}
      >
        <button className="numPad--clear">C</button>
        <button className="numPad--del">&larr;</button>
        <button className="numPad--divide orange">÷</button>
        <button className="numPad--7">7</button>
        <button className="numPad--8">8</button>
        <button className="numPad--9">9</button>
        <button className="numPad--multiply orange">x</button>
        <button className="numPad--4">4</button>
        <button className="numPad--5">5</button>
        <button className="numPad--6">6</button>
        <button className="numPad--minus orange">-</button>
        <button className="numPad--1">1</button>
        <button className="numPad--2">2</button>
        <button className="numPad--3">3</button>
        <button className="numPad--plus orange">+</button>
        <button className="numPad--0">0</button>
        <button className="numPad--equals orange">=</button>
      </div>
    </section>
  );
};

export default Calculator;
