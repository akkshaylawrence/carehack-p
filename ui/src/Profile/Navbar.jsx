import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <Link
              className="uk-navbar-item uk-logo uk-margin-remove-bottom"
              to="/"
            >
              <img className="brand-logo" src={logo} alt="FindCare" />
            </Link>
          </div>
          <div className="uk-navbar-right uk-visible@s">
            <div className="uk-container uk-visible">
              <ul className="uk-navbar-nav">
                <li className="uk-button uk-padding-remove-horizontal">
                  <a className="uk-margin-remove" href="#">
                    Book Appointment
                  </a>
                </li>
                <li className="uk-button uk-padding-remove-horizontal">
                  <a className="uk-margin-remove" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className=" uk-hidden@s"
          uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
        >
          <nav className="uk-navbar-container secnav" data-uk-navbar>
            <div className="uk-navbar-center">
              <div className="uk-container uk-visible">
                <ul className="uk-navbar-nav">
                  <li className="uk-button uk-padding-remove-horizontal">
                    <a className="uk-margin-remove" href="#">
                      Book Appointment
                    </a>
                  </li>
                  <li className="uk-button uk-padding-remove-horizontal">
                    <a className="uk-margin-remove" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navbar;
