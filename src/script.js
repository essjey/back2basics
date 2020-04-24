import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import HtmlCssEx from "./html-css-ex";
import Experiments from "./experiments";
import cssFlexGrid from "./css-flex-grid";

// naming things is hard.

const App = () => {
  return (
    <main className="container">
      <NavBar />
      {/* 
      The primary attr should be true for a 
      normal application for accessibility 
      purposes. This is the default behavior 
      for this component. 
      */}
      <Router>
        <HtmlCssEx path="/" />
        <Experiments path="/prog-fund" />
        <cssFlexGrid path="/css" />
      </Router>
    </main>
  );
};

render(<App />, document.getElementById("root"));
