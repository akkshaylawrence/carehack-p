import React from "react";
import logo from "../logo.png";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(event) {
    event.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    this.props.history.push("/");
  }
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
          <div className="uk-navbar-right">
            <div className="uk-container">
              <ul className="uk-navbar-nav">
                <li className="uk-button uk-padding-remove-right">
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(Navbar);
