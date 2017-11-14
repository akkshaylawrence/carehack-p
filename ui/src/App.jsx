import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Front from "./Front";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Front />
        </div>
      </Router>
    );
  }
}

export default App;
