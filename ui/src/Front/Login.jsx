import React from "react";
import { Link, withRouter } from "react-router-dom";
import UIkit from "uikit";
import BookComplete from "../Shared/BookComplete";
import axios from "../Shared/axios";
import storage from "../Shared/storage";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      fromBook: false,
      bookComplete: false
    };
    this.loginClick = this.loginClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    this.bookOptions = storage.get("booked");
    const phone = this.bookOptions ? this.bookOptions.phone : "";
    this.setState({
      phone,
      fromBook: this.bookOptions ? true : false
    });
    if (this.bookOptions) {
      UIkit.notification({
        message: "Please Login to continue",
        status: "primary",
        pos: "bottom-left",
        timeout: 2000
      });
    }
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  loginClick(event) {
    event.preventDefault();

    function userFromBooking(self) {
      const formData = new FormData();
      formData.append("pcontact", self.state.phone);
      formData.append("pwd", self.state.password);
      formData.append("bdate", self.bookOptions.date);
      formData.append("doctor", self.bookOptions.doctor);
      axios
        .post("/book/Bookslot", formData)
        .then(res => {
          if (res.data.data.authStatus) {
            //  Login Success
            localStorage.setItem(
              "user",
              JSON.stringify({
                phone: self.state.phone,
                name: res.data.data.pname
              })
            );
            self.setState({
              bookComplete: true
            });
          } else {
            self.setState({
              password: ""
            });
            UIkit.notification({
              message: "Something Wrong!",
              status: "danger",
              pos: "bottom-left",
              timeout: 2000
            });
          }
        })
        .catch(err => {
          console.error(err);
          UIkit.notification({
            message: "Something went Wrong!",
            status: "danger",
            pos: "bottom-left",
            timeout: 2000
          });
        });
    }

    function simpleLogin(self) {
      const formData = new FormData();
      formData.append("pcontact", self.state.phone);
      formData.append("pwd", self.state.password);
      axios
        .post("/book/login", formData)
        .then(res => {
          if (res.data.loggedIn) {
            const user = JSON.stringify({
              phone: self.state.phone,
              name: res.data.pname
            });
            localStorage.setItem("user", user);
            self.props.history.push("/profile");
          }
        })
        .catch(err => {
          console.error(err);
          UIkit.notification({
            message: "Something went Wrong!",
            status: "danger",
            pos: "bottom-left",
            timeout: 5000
          });
        });
    }

    if (this.state.fromBook) {
      userFromBooking(this);
    } else {
      simpleLogin(this);
    }
  }
  render() {
    //   return <BookComplete />;
    if (this.state.bookComplete) {
      return <BookComplete />;
    }
    return (
      <div>
        <h2>Login</h2>
        <p className="uk-text-meta">Login to book and view your profile.</p>
        <hr className="uk-margin-small" />
        <form className="uk-form-stacked">
          <div id="phone" className="uk-margin-small">
            <label className="uk-form-label" htmlFor="phone">
              Phone Number
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: phone" />
              <input
                id="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
                className="uk-input"
                type="number"
              />
            </div>
          </div>
          <div id="password" className="uk-margin-small uk-margin-remove-top">
            <label className="uk-form-label" htmlFor="password">
              Password
            </label>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: hashtag" />
              <input
                className="uk-input"
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="uk-margin-small">
            <button
              className="uk-button reg uk-button-primary uk-width-1-1"
              onClick={this.loginClick}
            >
              Login {this.state.fromBook && "and Book"}
            </button>
            <button className="uk-button-link nreg uk-button-primary">
              <Link to="/">Back</Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
