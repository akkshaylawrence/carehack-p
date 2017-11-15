import React from "react";
import logo from "./logo.png";
import Heading from "./Front/Heading";
import { Route } from "react-router-dom";
import Form from "./Front/Form";

class Front extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="uk-section uk-padding">
        <div className="uk-container">
          <div data-uk-grid>
            <Heading />
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default Front;
