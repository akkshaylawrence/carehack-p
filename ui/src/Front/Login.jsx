import React from "react";

class Login extends React.Component {
  render() {
    <li>
      <h2>Login</h2>
      <p class="uk-text-meta">Login to book and view your profile.</p>
      <hr class="uk-margin-small" />
      <form class="uk-form-stacked">
        <div id="phone" class="uk-margin-small">
          <label class="uk-form-label" for="form-stacked-text">
            Phone Number
          </label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: phone" />
            <input id="phone" class="uk-input" type="text" />
          </div>
        </div>
        <div id="otp" class="uk-margin-small uk-margin-remove-top">
          <label class="uk-form-label" for="form-stacked-text">
            Password
          </label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: hashtag" />
            <input class="uk-input" type="text" autofocus />
          </div>
        </div>
        <div class="uk-margin-small">
          <button class="uk-button reg uk-button-primary uk-width-1-1">
            Login and Book
          </button>
        </div>
      </form>
    </li>;
  }
}

export default Login;
