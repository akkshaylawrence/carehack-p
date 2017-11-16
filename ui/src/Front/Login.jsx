import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "../Shared/axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromBook: false
    };
    this.loginClick = this.loginClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    this.bookOptions = JSON.parse(sessionStorage.getItem("booked"));
    if (this.bookOptions) {
      this.setState({
        fromBook: true
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
    if (this.state.fromBook) {
      const bookOptions = JSON.parse(sessionStorage.getItem("booked"));
      if (bookOptions) {
        const formData = new FormData();
        formData.append("pcontact", this.state.phone);
        formData.append("password", this.state.password);
        formData.append("bdate", bookOptions.date);
        formData.append("doctor", bookOptions.doctor);
        axios.post("/book/Bookslot", formData).then(res => {
          console.log(res);
        });
      }
    }
  }
  render() {
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
