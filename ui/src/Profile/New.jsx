import React from "react";

class New extends React.Component {
  render() {
    return (
      <div>
        <div className="uk-card pcard uk-card-default uk-card-body">
          <p className="uk-text-meta">Welcome</p>
          <h2 className="uk-card-title uk-margin-remove-top">
            Akkshay Lawrence
          </h2>
          <p>Your Appointments</p>
          <hr />
          <dl className="uk-description-list">
            <dt>
              <span uk-icon="icon: calendar" /> 5th, November 2017
            </dt>
            <dd>
              <span uk-icon="icon: user" /> Dr. Unnikrishnan
            </dd>
            <dt>
              <span uk-icon="icon: calendar" /> 7th, December 2017
            </dt>
            <dd>
              <span uk-icon="icon: user" /> Dr. Unnikrishnan
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}
export default New;
