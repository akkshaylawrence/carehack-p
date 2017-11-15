import React from "react";
import logo from "./logo.png";
import Navbar from "./Profile/Navbar";
import New from "./Profile/New";
import List from "./Profile/List";
import Icons from "uikit/dist/js/uikit-icons";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <Navbar />
        <div className="uk-section uk-padding-remove">
          <div className="uk-container">
            <div className="uk-grid uk-grid-small uk-padding-small">
              <div className="uk-width-1-3@m">
                <New />
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
