import React from "react";

class Register extends React.Component {
  render() {
    return (
      <li>
        <h2>Register</h2>
        <p className="uk-text-meta">
          Registration allows you to book appointments.
        </p>
        <hr className="uk-margin-small" />
        <form className="uk-form-stacked">
          <div id="phone" className="uk-margin-small">
            <label className="uk-form-label" htmlFor="form-stacked-text">
              Phone Number
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: phone" />
              <input id="phone" className="uk-input" type="text" />
            </div>
            <label
              className="uk-form-label uk-text-right"
              htmlFor="form-stacked-text"
            >
              Enter OTP Below
            </label>
          </div>
          <div id="otp" className="uk-margin-small uk-margin-remove-top">
            <label className="uk-form-label" htmlFor="form-stacked-text">
              OTP
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: hashtag" />
              <input className="uk-input" type="text" />
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
          <div className="uk-margin-small">
            <button className="uk-button reg uk-button-primary uk-width-1-1">
              Register
            </button>
          </div>
          <div className="uk-margin-small">
            <button className="uk-button uk-hidden nreg uk-button-primary uk-width-1-1">
              Book Appointment
            </button>
          </div>
        </form>
      </li>
    );
  }
}

export default Register;
