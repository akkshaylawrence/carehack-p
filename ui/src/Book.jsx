import Render from "react";

class Book extends React.Component {
  render() {
    <li>
      <h2 class="uk-padding-small uk-padding-remove-bottom uk-padding-remove-left">
        Book Appointment
      </h2>
      <p class="uk-text-meta">Book appponment to any doctor.</p>
      <hr class="uk-margin-small" />
      <form class="uk-form-stacked">
        <div id="phone" class="uk-margin-small">
          <label class="uk-form-label" for="form-stacked-text">
            Phone Number
          </label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: phone" />
            <input
              id="phone"
              class="uk-input"
              type="text"
              placeholder="eg: 9961464050"
            />
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">
            Select Department
          </label>
          <select id="sectionSel" class="uk-select" />
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">
            Select Doctor
          </label>
          <select id="serviceSel" class="uk-select" />
        </div>
        <div class="uk-margin-small">
          <label class="uk-form-label" for="form-stacked-text">
            Date
          </label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: calendar" />
            <input class="uk-input" id="datepicker" placeholder="dd-mm-yyyy" />
          </div>
        </div>
        <div class="uk-margin-small">
          <label class="uk-form-label" for="form-stacked-text">
            Time
          </label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: clock" />
            <input class="uk-input" id="timepicker" placeholder="HH:mm" />
          </div>
        </div>
        <hr />
        <div class="uk-margin-small">
          <button
            class="uk-button reg uk-button-primary uk-width-1-1"
            uk-switcher-item="next"
          >
            Continue
          </button>
        </div>
        <div class="uk-child-width-1-2" uk-grid>
          <div>
            <button
              class="uk-button-link nreg uk-button-primary uk-width-1-1"
              uk-switcher-item="next"
            >
              Login
            </button>
          </div>
          <div>
            <button
              class="uk-button-link nreg uk-button-primary uk-width-1-1"
              uk-switcher-item="2"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </li>;
  }
}

export default Book;
