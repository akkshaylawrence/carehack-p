import React from "react";

class Register extends React.Component {
  render() {
    <li>
      <h2>Register</h2>
      <p class="uk-text-meta">Registration allows you to book appointments.</p>
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
          <label class="uk-form-label uk-text-right" for="form-stacked-text">
            Enter OTP Below
          </label>
        </div>
        <div id="otp" class="uk-margin-small uk-margin-remove-top">
          <label class="uk-form-label" for="form-stacked-text">
            OTP
          </label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: hashtag" />
            <input class="uk-input" type="text" />
          </div>
          <label class="uk-form-label uk-text-right" for="form-stacked-text">
            <a class="uk-link-reset" href="">
              Resend?
            </a>
          </label>
        </div>
        <div class="uk-margin-small">
          <button class="uk-button reg uk-button-primary uk-width-1-1">
            Register
          </button>
        </div>
        <div class="uk-margin-small">
          <button class="uk-button uk-hidden nreg uk-button-primary uk-width-1-1">
            Book Appointment
          </button>
        </div>
      </form>
    </li>;
  }
}
