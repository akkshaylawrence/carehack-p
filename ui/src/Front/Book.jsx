import React from "react";
import flatpickr from "flatpickr";
import Flatpickr from "react-flatpickr";
import uikit from "uikit";
import { Link, withRouter } from "react-router-dom";
import axios from "../Shared/axios";
import "flatpickr/dist/themes/material_green.css";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      specialities: [],
      speciality: "",
      doctors: [],
      selDoctor: "",
      phone: ""
    };
    this.onContinue = this.onContinue.bind(this);
    this.handleSpeciality = this.handleSpeciality.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount() {
    axios
      .get("book/getSpec", {})
      .then(res => {
        this.setState({
          specialities: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleSpeciality(event) {
    this.setState({
      speciality: event.target.value
    });
    const formData = new FormData();
    formData.append("spec", event.target.value);
    axios
      .post("book/getdoctor", formData)
      .then(res => {
        this.setState({
          doctors: res.data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleDoctor(event) {
    this.setState({
      selDoctor: event.target.value
    });
    const formData = new FormData();
    formData.append("doctorid", event.target.value);
    axios
      .post("book/checkforslot", formData)
      .then(res => {
        this.setState({
          doctors: res.data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onContinue(event) {
    event.preventDefault();
    const bookOptions = {
      phone: this.state.phone,
      speciality: this.state.speciality,
      doctor: this.state.selDoctor,
      date: this.state.date
    };
    sessionStorage.setItem("booked", JSON.stringify(bookOptions));
    this.props.history.push("/register");
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
        <p className="uk-text-meta">Book appointment to any doctor.</p>
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
                name="phone"
                className="uk-input"
                type="text"
                placeholder="eg: 9961464050"
                onChange={this.handleInputChange}
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
              defaultValue=""
              onChange={this.handleSpeciality}
              name="speciality"
            >
              <option value="" disabled className="placeholder-select">
                Select Department
              </option>
              {this.state.specialities.map((sp, index) => {
                return (
                  <option value={sp.toLowerCase()} key={index}>
                    {sp}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="doctor">
              Select Doctor
            </label>
            <select
              id="doctorSel"
              className="uk-select"
              name="doctor"
              onChange={this.handleDoctor}
            >
              {this.state.doctors.map((doc, index) => {
                return (
                  <option value={doc.did} key={index}>
                    {doc.dname}
                  </option>
                );
              })}
            </select>
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
              onClick={this.onContinue}
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

export default withRouter(Book);
