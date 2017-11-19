import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Book from "../Shared/Book";
import BottomBar from "./BottomBar";

function Form() {
  return (
    <div className="uk-width-expand">
      <div className="mform uk-card uk-card-small centre uk-card-default uk-card-body">
        <ul>
          <li>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <span>
                    <Book />
                    <BottomBar />
                  </span>
                );
              }}
            />
          </li>
          <li>
            <Route path="/login" component={Login} />
          </li>
          <li>
            <Route path="/register" component={Register} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Form;
