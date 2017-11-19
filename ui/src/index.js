import React from "react";
import ReactDOM from "react-dom";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";
import "react-select/dist/react-select.css";
import App from "./App";

//Adding support for <IE11 because React 16 uses Map and Set. These are not natively supported on these browsers.
import "core-js/es6/map";
import "core-js/es6/set";

UIkit.use(Icons);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/sw.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // Registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
