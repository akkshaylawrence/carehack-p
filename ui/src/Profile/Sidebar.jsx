import React from "react";
import { format } from "date-fns";

class Sidebar extends React.Component {
  render() {
    const { user, data } = this.props;
    return (
      <div>
        <div className="uk-card pcard uk-card-default uk-card-body">
          <p className="uk-text-meta">Welcome</p>
          <h2 className="uk-card-title uk-margin-remove-top">{user.name}</h2>
          <p>Your upcoming Appointments</p>
          <hr />
          {data ? (
            <ul uk-accordion="true">
              {data.map((appointment, index) => {
                return (
                  <li key={index}>
                    <p className="uk-accordion-title">
                      <span uk-icon="icon: calendar; ratio: 1.3" />
                      <span className="atext uk-text-middle">
                        {format(appointment.adate, "D MMMM, YYYY")}
                      </span>
                    </p>
                    <div className="uk-accordion-content">
                      <p>
                        <span uk-icon="icon: user; ratio: .9" />
                        <span className="atext uk-text-middle uk-text-meta">
                          Dr. {appointment.doctor}
                        </span>
                        <br />
                        <span uk-icon="icon: tag; ratio: .9" />
                        <span className="atext uk-text-middle uk-text-meta">
                          {appointment.aslot}
                        </span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No upcoming appointments</p>
          )}
        </div>
      </div>
    );
  }
}
export default Sidebar;
