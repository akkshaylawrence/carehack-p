import React from "react";
import firebase from "firebase";
import UIkit from "uikit";
import { withRouter } from "react-router-dom";
import axios from "../Shared/axios";
import storage from "../Shared/storage";
import BookComplete from "../Shared/BookComplete";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      otp: "",
      password: "",
      smsSent: false,
      email: "",
      bookOptions: false,
      bookingComplete: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    this.getCodeFromUserInput = this.getCodeFromUserInput.bind(this);
  }
  componentDidMount() {
    const bookOptions = storage.get("booked");
    const phone = bookOptions ? bookOptions.phone : "";
    this.setState({
      phone,
      bookOptions: bookOptions ? true : false
    });
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-up-button",
      {
        size: "invisible",
        callback: response => {
          this.onSignUpSubmit();
        },
        "expired-callback": function() {
          // Response expired. Ask user to solve reCAPTCHA again.
          window.recaptchaVerifier.render().then(widgetId => {
            grecaptcha.reset(widgetId);
          });
          console.log("Expired");
        }
      }
    );
    recaptchaVerifier.render().then(function(widgetId) {
      window.recaptchaWidgetId = widgetId;
    });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  onSignUpSubmit(event) {
    event && event.preventDefault();
    const phoneNumber = "+91" + this.state.phone;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmationResult => {
        this.setState({
          smsSent: true
        });
        window.confirmationResult = confirmationResult;
      })
      .catch(error => {
        console.log(error);
      });
  }
  getCodeFromUserInput(event) {
    event.preventDefault();
    const code = this.state.otp;

    function fromBooking(self) {
      confirmationResult
        .confirm(code)
        .then(result => {
          const bookOptions = storage.get("booked");
          if (bookOptions) {
            const formData = new FormData();
            formData.append("pname", self.state.name);
            formData.append("pcontact", self.state.phone);
            formData.append("pemail", self.state.email);
            formData.append("doctor", bookOptions.doctor);
            formData.append("bdate", bookOptions.date.slice(0, 10));
            formData.append("pwd", self.state.password);
            axios.post("book/RegandBookslot", formData).then(res => {
              localStorage.setItem(
                "user",
                JSON.stringify({
                  name: res.data.pname,
                  phone: self.state.phone
                })
              );
              self.setState({
                bookingComplete: true
              });
            });
          }
        })
        .catch(error => {
          UIkit.notification({
            message: "Invalid Verification Code!",
            status: "danger",
            pos: "bottom-left",
            timeout: 5000
          });
        });
    }

    function simpleRegister(self) {
      confirmationResult
        .confirm(code)
        .then(result => {
          const bookOptions = storage.get("booked");
          if (bookOptions) {
            const formData = new FormData();
            formData.append("pname", self.state.name);
            formData.append("pcontact", self.state.phone);
            formData.append("pemail", self.state.email);
            formData.append("pwd", self.state.password);
            axios
              .post("book/regist", formData)
              .then(res => {
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    name: res.data.pname,
                    phone: self.state.phone
                  })
                );
                self.setState({
                  bookingComplete: true
                });
              })
              .catch(err => {
                console.error(err);
              });
          }
        })
        .catch(error => {
          UIkit.notification({
            message: "Invalid Verification Code!",
            status: "danger",
            pos: "bottom-left",
            timeout: 5000
          });
        });
    }

    if (this.state.bookOptions) {
      fromBooking(this);
    } else {
      simpleRegister(this);
    }
  }
  render() {
    if (this.state.bookingComplete) {
      return <BookComplete />;
    }
    return (
      <div>
        <h2>Register</h2>
        <p className="uk-text-meta">
          Registration allows you to book appointments.
        </p>
        <hr className="uk-margin-small" />
        <form className="uk-form-stacked" action="#!">
          <div className="uk-margin-small">
            <label className="uk-form-label" htmlFor="name">
              Name
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: user" />
              <input
                id="name"
                name="name"
                required
                className="uk-input"
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="uk-margin-small">
            <label className="uk-form-label" htmlFor="email">
              Email
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: mail" />
              <input
                id="email"
                name="email"
                className="uk-input"
                type="email"
                required
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="uk-margin-small">
            <label className="uk-form-label" htmlFor="phone">
              Phone Number
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: phone" />
              <input
                id="phone"
                name="phone"
                className="uk-input"
                type="text"
                required
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div id="password" className="uk-margin-small uk-margin-remove-top">
            <label className="uk-form-label" htmlFor="password">
              Create New Password
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: hashtag" />
              <input
                className="uk-input"
                type="password"
                name="password"
                id="password"
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          {this.state.smsSent ? (
            <div id="otp" className="uk-margin-small uk-margin-remove-top">
              <label className="uk-form-label" htmlFor="otp">
                OTP
              </label>
              <div className="uk-inline uk-width-1-1">
                <span className="uk-form-icon" uk-icon="icon: hashtag" />
                <input
                  id="otp"
                  name="otp"
                  className="uk-input"
                  type="number"
                  value={this.state.otp}
                  onChange={this.handleInputChange}
                />
              </div>
              <label
                className="uk-form-label uk-text-right"
                htmlFor="form-stacked-text"
              >
                <a className="uk-link-reset" href="">
                  Resend?
                </a>
              </label>
            </div>
          ) : (
            <div className="uk-margin-small">
              <button
                className="uk-button reg uk-button-primary uk-width-1-1"
                id="sign-up-button"
                onClick={this.onSignUpSubmit}
              >
                Verify Number
              </button>
            </div>
          )}
          <div className="uk-margin-small">
            <button
              className="uk-button reg uk-button-primary uk-width-1-1"
              disabled={!this.state.smsSent}
              onClick={this.getCodeFromUserInput}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
