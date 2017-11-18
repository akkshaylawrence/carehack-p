import React from "react";
import logo from "./logo.png";
import Navbar from "./Profile/Navbar";
import Sidebar from "./Profile/Sidebar";
import List from "./Profile/List";
import axios from "./Shared/axios";
import Icons from "uikit/dist/js/uikit-icons";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    sessionStorage.removeItem("booked");
  }
  render() {
    return (
      <section>
        <Navbar />
        <div className="uk-section uk-padding-remove">
          <div className="uk-container">
            <div className="uk-grid uk-grid-small uk-padding-small">
              <div className="uk-width-1-3@m">
                <Sidebar />
              </div>
              <div className="uk-width-2-3@m">
                <List />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
