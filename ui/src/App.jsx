import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Front from "./Front";
import Profile from "./Profile";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Front} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
