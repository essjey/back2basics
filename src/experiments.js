import React from "react";
import Calculator from "./calculator";
import Dogs from "./IHeartDogs";

const Experiments = () => {
  function ex1() {
    const character = "a";
    const timesToRepeat = 50;
    const makePirate = "ARRr!";
    let answer = "";

    for (let i = 0; i < timesToRepeat; i++) {
      answer += character;
    }

    return answer + makePirate;
  }

  function ex2(e) {
    const textOutput = document.querySelector(".output");
    const text = `Target button was ${e.target.innerText}`;

    if (e.target.tagName != "BUTTON") return;

    textOutput.innerText = text;
    // NOTE: e.stopPropagation() stops the event from bubbling up further.
    // MDN: https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
  }

  return (
    <div>
      <h1>Experiments with JS</h1>
      <p>
        <a
          href="https://btholt.github.io/intro-to-web-dev-v2/programming-fundamentals"
          target="_blank"
        >
          Please reference this site for js experiment examples.
        </a>{" "}
        The course above is by Brian Holt. He has several courses on frontend
        masters. They are great!
      </p>
      <h3>Variables & loops exercise:</h3>
      <p>{ex1()}</p>

      <h3>Event Delegation</h3>
      <div
        className="button-container"
        onClick={(e) => {
          ex2(e);
        }}
      >
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
      <p className="output"></p>

      <h3>Calculator Project</h3>
      <Calculator />

      <Dogs />
    </div>
  );
};

export default Experiments;
