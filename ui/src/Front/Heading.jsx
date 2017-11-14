import React from "react";
import logo from "../logo.png";

function Heading() {
  return (
    <div className="uk-width-1-2@m hero">
      <a className="uk-logo" href="index.html">
        <img className="brand-logo" src={logo} alt="Phoenix" />
      </a>
      <h1 className="herot uk-light uk-position-medium">
        Register or Book your appointment now.
      </h1>
    </div>
  );
}

export default Heading;
