import React from "react";

class Login extends React.Component {
  render() {
    return (
      <li>
        <h2>Login</h2>
        <p className="uk-text-meta">Login to book and view your profile.</p>
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
          </div>
          <div id="otp" className="uk-margin-small uk-margin-remove-top">
            <label className="uk-form-label" htmlFor="form-stacked-text">
              Password
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: hashtag" />
              <input className="uk-input" type="text" autofocus />
            </div>
          </div>
          <div className="uk-margin-small">
            <button className="uk-button reg uk-button-primary uk-width-1-1">
              Login and Book
            </button>
          </div>
        </form>
      </li>
    );
  }
}

export default Login;