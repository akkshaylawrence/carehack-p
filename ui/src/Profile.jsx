import React from "react";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import logo from "./logo.png";
import storage from "./Shared/storage";
import Navbar from "./Profile/Navbar";
import Sidebar from "./Profile/Sidebar";
import List from "./Profile/List";
import Book from "./Shared/Book";
import axios from "./Shared/axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    this.user = localStorage.getItem("user");
  }
  componentDidMount() {
    storage.delete("booked");
    const formData = new FormData();
    formData.append("pcontact", "1234567890");
    axios
      .post("book/getpastap", formData)
      .then(res => {
        return res.data.data;
      })
      .then(data => {
        this.setState({
          data
        });
      })
      .catch(err => {
        UIkit.notification({
          message: "Please Login to continue",
          status: "danger",
          pos: "bottom-left",
          timeout: 2000
        });
        localStorage.clear();
        this.props.history.push("/login");
      });
  }
  render() {
    return (
      <section>
        <Navbar />
        <div className="uk-section uk-padding-remove">
          <div className="uk-container">
            <div className="uk-grid uk-grid-small uk-padding-small">
              <div className="uk-width-1-3@m">
                {this.user && <Sidebar user={this.user} />}
                <div className="pform uk-width-1-1 uk-card uk-card-small centre uk-card-default uk-card-body">
                  <Book />
                </div>
              </div>
              <div className="uk-width-2-3@m">
                <List data={this.state.data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
