import React from "react";
import flatpickr from "flatpickr";
import Flatpickr from "react-flatpickr";
import uikit from "uikit";
import { Link } from "react-router-dom";
import firebase from "firebase";
require("firebase/firestore");
import "flatpickr/dist/themes/material_green.css";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      speciality: ""
    };
    this.initializeFirebase();
    this.initializeFirebase = this.initializeFirebase.bind(this);
    this.handleSpeciality = this.handleSpeciality.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
  }
  handleSpeciality(event) {
    this.setState(
      {
        speciality: event.target.value
      },
      () => console.log(this.state.speciality)
    );
    const db = firebase.Firestore();
    db
      .collection("hospital")
      .get()
      .then(res => console.log(res));
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <h2 className="uk-padding-small uk-padding-remove-bottom uk-padding-remove-left">
          Book Appointment
        </h2>
        <p className="uk-text-meta">Book appponment to any doctor.</p>
        <hr className="uk-margin-small" />
        <form className="uk-form-stacked">
          <div id="phone" className="uk-margin-small">
            <label className="uk-form-label" htmlFor="form-stacked-text">
              Phone Number
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: phone" />
              <input
                id="phone"
                className="uk-input"
                type="text"
                placeholder="eg: 9961464050"
              />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="sectionSel">
              Select Department
            </label>
            <select
              id="sectionSel"
              className="uk-select"
              onChange={this.handleSpeciality}
              name="speciality"
            >
              <option
                value="0"
                disabled
                selected
                className="placeholder-select"
              >
                Select Department
              </option>
              <option value="cardiology">Cardiology</option>
              <option value="anesthesiologist">Anesthesiologist</option>
              <option value="gastroenterology">Gastroenterology</option>
              <option value="cardiovascular-surgeon">
                Cardiovascular surgeon
              </option>
            </select>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="doctor">
              Select Doctor
            </label>
            <select id="doctorSel" className="uk-select" name="doctor" />
          </div>
          <div className="uk-margin-small">
            <label className="uk-form-label" htmlFor="form-stacked-text">
              Date
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: calendar" />
              <Flatpickr
                className="uk-input"
                options={{
                  enableTime: false,
                  minDate: "today",
                  dateFormat: "d/m/Y",
                  maxDate: new Date().fp_incr(60)
                }}
                value={date}
                onChange={date => {
                  this.setState({ date });
                }}
              />
            </div>
          </div>
          <hr />
          <div className="uk-margin-small">
            <button
              className="uk-button reg uk-button-primary uk-width-1-1"
              uk-switcher-item="next"
            >
              Continue
            </button>
          </div>
          <div className="uk-child-width-1-2" data-uk-grid>
            <div>
              <button className="uk-button-link nreg uk-button-primary uk-width-1-1">
                <Link to="/login">Login</Link>
              </button>
            </div>
            <div>
              <button className="uk-button-link nreg uk-button-primary uk-width-1-1">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Book;
