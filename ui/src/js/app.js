import "../css/style.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
const flatpickr = require("flatpickr");

UIkit.use(Icons);

import "core-js/es6/map";
import "core-js/es6/set";

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

flatpickr("#datepicker", {
  enableTime: false,
  minDate: "today",
  dateFormat: "d/m/Y",
  maxDate: new Date().fp_incr(60)
});
flatpickr("#timepicker", {
  enableTime: true,
  noCalendar: true,
  enableSeconds: false,
  time_24hr: false,
  dateFormat: "H:i",
  defaultHour: 12,
  defaultMinute: 0
});
var sectionObj = {
  Facials: ["Plainum", "Gold", "Eschborn", "Diamond", "Pearl", "Fruit"],
  "Hair Cuts": ["Kids cut", "Straight Cut", "Normal U", "Deep U", "Step Cut"],
  "Hair Treatments": ["Straitening", "Soothening", "Coloring", "Henna"],
  Bridal: ["Standard", "Express", "Deluxe", "Luxuary"],
  Others: ["Waxing", "Pedicure", "Manicure", "Wink & Pout care"]
};
window.onload = function() {
  var sectionSel = document.getElementById("sectionSel"),
    serviceSel = document.getElementById("serviceSel");
  var i;
  for (var state in sectionObj) {
    sectionSel.options[sectionSel.options.length] = new Option(state, state);
  }
  sectionSel.onchange = function() {
    serviceSel.length = 1;
    if (this.selectedIndex < 1) {
      serviceSel.options[0].text = "Please select section";
      return; // done
    }
    i = 0;
    serviceSel.options[0].text = "Select Service";
    for (var county in sectionObj[this.value]) {
      var value = sectionObj[this.value][i];
      serviceSel.options[serviceSel.options.length] = new Option(value, value);
      i += 1;
    }
    if (serviceSel.options.length == 2) {
      serviceSel.selectedIndex = 1;
      serviceSel.onchange();
    }
  };
  sectionSel.onchange();
};
