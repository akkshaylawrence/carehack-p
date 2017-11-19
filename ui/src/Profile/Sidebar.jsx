import React from "react";

class Sidebar extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="uk-card pcard uk-card-default uk-card-body">
          <p className="uk-text-meta">Welcome</p>
          <h2 className="uk-card-title uk-margin-remove-top">{user.name}</h2>
          <p>Your upcoming Appointments</p>
          <hr />
          <ul uk-accordion="true">
            <li>
              <p className="uk-accordion-title">
                <span uk-icon="icon: calendar; ratio: 1.3" />
                <span className="atext uk-text-middle">5th, November 2017</span>
              </p>
              <div className="uk-accordion-content">
                <p>
                  <span uk-icon="icon: user; ratio: .9" />
                  <span className="atext uk-text-middle uk-text-meta">
                    Dr. Unnikrishnan
                  </span>
                  <br />
                  <span uk-icon="icon: tag; ratio: .9" />
                  <span className="atext uk-text-middle uk-text-meta">108</span>
                </p>
              </div>
            </li>
            <li>
              <p className="uk-accordion-title">
                <span uk-icon="icon: calendar; ratio: 1.3" />
                <span className="atext uk-text-middle">5th, November 2017</span>
              </p>
              <div className="uk-accordion-content">
                <p>
                  <span uk-icon="icon: user; ratio: .9" />
                  <span className="atext uk-text-middle uk-text-meta">
                    Dr. Unnikrishnan
                  </span>
                  <br />
                  <span uk-icon="icon: tag; ratio: .9" />
                  <span className="atext uk-text-middle uk-text-meta">108</span>
                </p>
              </div>
            </li>
            <li>
              <p className="uk-accordion-title">
                <span uk-icon="icon: calendar; ratio: 1.3" />
                <span className="atext uk-text-middle">5th, November 2017</span>
              </p>
              <div className="uk-accordion-content">
                <p>
                  <span uk-icon="icon: user; ratio: .9" />
                  <span className="atext uk-text-middle uk-text-meta">
                    Dr. Unnikrishnan
                  </span>
                  <br />
                  <span uk-icon="icon: tag; ratio: .9" />
                  <span className="atext uk-text-middle uk-text-meta">108</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;
