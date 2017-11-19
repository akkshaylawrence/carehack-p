import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Front from "./Front";
import "./index.css";
import Profile from "./Profile";
import firebase from "firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
    this.initializeFirebase();
  }
  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }
  initializeFirebase() {
    const config = {
      apiKey: "AIzaSyD2KHYE4_wQWeyPLKemMESWCxX0x0S7nFM",
      authDomain: "findcare-5e020.firebaseapp.com",
      databaseURL: "https://findcare-5e020.firebaseio.com",
      projectId: "findcare-5e020",
      storageBucket: "findcare-5e020.appspot.com",
      messagingSenderId: "484085783680"
    };
    firebase.initializeApp(config);
    firebase.auth().useDeviceLanguage();
  }
  render() {
    if (this.state.hasError) {
      return (
        <div data-uk-alert className="uk-alert-danger">
          <h3>Something went wrong</h3>
          <p>
            We are working to correct the error. Please stay patient and try
            after some time.
          </p>
          <p>Thank You</p>
        </div>
      );
    }
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
