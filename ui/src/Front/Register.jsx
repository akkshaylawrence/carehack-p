import React from "react";
import firebase from "firebase";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      otp: "",
      smsSent: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    this.getCodeFromUserInput = this.getCodeFromUserInput.bind(this);
  }
  componentDidMount() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-up-button",
      {
        size: "invisible",
        callback: response => {
          this.onSignUpSubmit();
        },
        "expired-callback": function() {
          // Response expired. Ask user to solve reCAPTCHA again.
          console.log("Expired");
        }
      }
    );
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
    confirmationResult
      .confirm(code)
      .then(result => {
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch(error => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }
  render() {
    return (
      <div>
        <h2>Register</h2>
        <p className="uk-text-meta">
          Registration allows you to book appointments.
        </p>
        <hr className="uk-margin-small" />
        <form className="uk-form-stacked">
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
          <div id="phone" className="uk-margin-small">
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
            {/* <label
              className="uk-form-label uk-text-right"
              htmlFor="form-stacked-text"
            >
              Enter OTP Below
            </label> */}
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
          <div className="uk-margin-small">
            <button className="uk-button uk-hidden nreg uk-button-primary uk-width-1-1">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
