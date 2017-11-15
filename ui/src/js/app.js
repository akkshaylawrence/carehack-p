// import "../css/style.css";
// import uikit from "uikit";

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

var sectionObj = {
  Facials: [
    "Plainum",
    "Gold",
    "Eschborn",
    "Diamond",
    "Pearl",
    "Fruit",
    "Kesar",
    "Choco",
    "Anti Acne Pimple",
    "Whitening",
    "Whitening glow",
    "Oxy glow",
    "Natural"
  ],
  "Hair Cuts": [
    "Kids cut",
    "Straight Cut",
    "Normal U",
    "Deep U",
    "Step Cut",
    "Laser Cut",
    "Feather cut",
    "Mushroom cut",
    "Bluts cut",
    "Layer cut"
  ],
  "Hair Treatments": [
    "Straitening",
    "Soothening",
    "Coloring",
    "Henna",
    "Shampoo",
    "Rebounding",
    "Volumizing",
    "Hair Spa",
    "Drandru  Treatment"
  ],
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
