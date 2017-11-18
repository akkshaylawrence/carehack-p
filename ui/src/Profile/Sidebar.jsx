import React from "react";

class Sidebar extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="uk-card pcard uk-card-default uk-card-body">
          <p className="uk-text-meta">Welcome</p>
          <h2 className="uk-card-title uk-margin-remove-top">{user.name}</h2>
          <p>Upcoming Appointments</p>
          <hr />
          <dl className="uk-description-list">
            <dt>
              <span uk-icon="icon: calendar" />
              <span>5th, November 2017</span>
            </dt>
            <dd>
              <span uk-icon="icon: user" />
              <span>Dr. Unnikrishnan</span>
            </dd>
            <dt>
              <span uk-icon="icon: calendar" />
              <span>7th, December 2017</span>
            </dt>
            <dd>
              <span uk-icon="icon: user" />
              <span>Dr. Unnikrishnan</span>
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}
export default Sidebar;
