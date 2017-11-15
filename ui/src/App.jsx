import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Front from "./Front";
import Profile from "./Profile";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Profile />
          {/* <Front/> */}
        </div>
      </Router>
    );
  }
}

export default App;
