import React from "react";
import logo from "./logo.png";
import Icons from "uikit/dist/js/uikit-icons";
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <a
              className="uk-navbar-item uk-logo uk-margin-remove-bottom"
              href="index.html"
            >
              <img className="brand-logo" src={logo} alt="FindCare" />
            </a>
          </div>
          <div className="uk-navbar-right">
            <a
              className="uk-navbar-toggle uk-hidden@m"
              data-uk-navbar-toggle-icon
              href="#"
              type="button"
              uk-toggle="target: #offcanvas-push"
            />
            <div className="uk-container uk-visible@m">
              <ul className="uk-navbar-nav">
                <li className="uk-button uk-padding-remove-right">
                  <a className="uk-margin-remove" href="#">
                    Book Appointment
                  </a>
                </li>
                <li className="uk-button uk-padding-remove-left">
                  <a className="uk-margin-remove" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="offcanvas-push" uk-offcanvas="flip: true; overlay: true">
            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
              <button
                className="uk-offcanvas-close"
                type="button"
                data-uk-close
              />
              <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                <li className="uk-nav-header">Menu</li>
                <li className="uk-divider-icon" />
                <li className="uk-parent">
                  <a href="index.html">Book Appointment</a>
                </li>
                <li className="uk-parent">
                  <a href="about.html">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="uk-section uk-padding-remove">
          <div className="uk-container">
            <div className="uk-grid uk-padding-small">
              <div className="uk-width-1-3@m">
                <div className="uk- pcard uk-card-default uk-card-body">
                  <p className="uk-text-meta">Welcome</p>
                  <h2 className="uk-card-title uk-margin-remove-top">
                    Akkshay Lawrence
                  </h2>
                  <p>Your Appointments</p>
                  <hr />
                  <dl className="uk-description-list">
                    <dt>
                      <span uk-icon="icon: calendar" /> 5th, November 2017
                    </dt>
                    <dd>
                      <span uk-icon="icon: user" /> Dr. Unnikrishnan
                    </dd>
                    <dt>
                      <span uk-icon="icon: calendar" /> 7th, December 2017
                    </dt>
                    <dd>
                      <span uk-icon="icon: user" /> Dr. Unnikrishnan
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="uk-width-2-3@m">
                <div className="uk- pcard uk-card-default uk-card-body">
                  <h3 className="uk-card-title">Your Appointments</h3>
                  <p>
                    Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-section uk-padding-remove uk-section-default footer">
          <div className="footer-bottom">
            <p className="uk-text-center uk-text-middle uk-text-small uk-padding-small uk-padding-remove-vertical uk-margin-remove-bottom">
              Made by Phoenix
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
