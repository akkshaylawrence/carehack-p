import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <div className="uk-width-1-2@m hero">
      <Link className="uk-logo" to="/">
        <img className="home-logo centre" src={logo} alt="FindCare" />
      </Link>
      <h1 className="herot uk-light uk-position-medium">
        Register or Book your appointment now.
      </h1>
    </div>
  );
}

export default Heading;
