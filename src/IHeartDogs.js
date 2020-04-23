import React from "react";

const Dogs = () => {
  const DOG_URL = "https://dog.ceo/api/breeds/image/random";

  // const doggos = document.querySelector(".doggos");

  function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
      .then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
      })
      .then(function (processingResponse) {
        console.log(processingResponse);
        const img = document.createElement("img");
        img.src = processingResponse.message;
        img.alt = "Cute Doggo";
        document.querySelector(".doggos").prepend(img);
      });
  }

  return (
    <div>
      <h1>Dogs:</h1>
      <button className="add-doggo" onClick={() => addNewDoggo()}>
        Add Dog
      </button>
      <div className="doggos">{addNewDoggo()}</div>
    </div>
  );
};

export default Dogs;
