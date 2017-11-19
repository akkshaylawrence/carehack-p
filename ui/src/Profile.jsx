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
import { isPast, isFuture } from "date-fns";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastData: [],
      futureData: [],
      data: {}
    };
    this.rebook = this.rebook.bind(this);
  }
  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
  componentDidMount() {
    storage.delete("booked");
    const formData = new FormData();
    formData.append("pcontact", this.user.phone);
    axios
      .post("book/getpastap", formData)
      .then(res => {
        return res.data.data;
      })
      .then(data => {
        const pastData = data.filter(obj => {
          return isPast(new Date(obj.adate));
        });
        const futureData = data.filter(obj => {
          return isFuture(new Date(obj.adate));
        });
        this.setState({
          pastData,
          futureData
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
  rebook(row) {
    this.setState({
      data: row
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
                {this.user && (
                  <Sidebar user={this.user} data={this.state.futureData} />
                )}
                <div className="pform uk-width-1-1 uk-card uk-card-small centre uk-card-default uk-card-body">
                  <Book data={this.state.data} />
                </div>
              </div>
              <div className="uk-width-2-3@m">
                <List data={this.state.pastData} clickLink={this.rebook} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
