import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/prog-fund">JS Experiments</Link>
    </nav>
  );
};

export default NavBar;
