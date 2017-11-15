import React from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import uikit from "uikit";
import app from "../js/app";

class Book extends React.Component {
  componentDidMount() {
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
  }
  render() {
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
            <label className="uk-form-label" htmlFor="form-stacked-text">
              Select Department
            </label>
            <select id="sectionSel" className="uk-select">
              <option value="0">Select Department</option>
            </select>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-stacked-text">
              Select Doctor
            </label>
            <select id="serviceSel" className="uk-select" />
          </div>
          <div className="uk-margin-small">
            <label className="uk-form-label" htmlFor="form-stacked-text">
              Date
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: calendar" />
              <input
                className="uk-input"
                id="datepicker"
                placeholder="dd-mm-yyyy"
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
              <button
                className="uk-button-link nreg uk-button-primary uk-width-1-1"
                uk-switcher-item="next"
              >
                Login
              </button>
            </div>
            <div>
              <button
                className="uk-button-link nreg uk-button-primary uk-width-1-1"
                uk-switcher-item="2"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Book;
