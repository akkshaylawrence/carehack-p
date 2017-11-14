import React from "react";
import Login from "./Login";
import Register from "./Register";

function Form() {
  return (
    <div className="uk-width-1-2@m">
      <div className="mform uk-card uk-card-small centre uk-card-default uk-card-body">
        <div className="uk-hidden" uk-switcher="animation: uk-animation-fade">
          <button
            className="uk-button uk-width-1-1 uk-button-default"
            type="button"
          >
            Item
          </button>
          <button
            className="uk-button uk-width-1-1 uk-button-default"
            type="button"
          >
            Item
          </button>
          <button
            className="uk-button uk-width-1-1 uk-button-default"
            type="button"
          >
            Item
          </button>
        </div>
        <ul className="uk-switcher">
          <Register />
        </ul>
      </div>
    </div>
  );
}

export default Form;
