import React from "react";

class List extends React.Component {
  render() {
    return (
      <div>
        <div
          className="uk-card pcard uk-card-default uk-card-body"
          uk-overflow-auto="true"
        >
          <h3 className="uk-card-title">Your Appointments</h3>
          <p>
            Given below are your Previous appointments. Press the "Rebook"
            button to repeat the same appointment.
          </p>
          <table className="uk-table uk-table-justify uk-table-hover uk-table-divider">
            <thead>
              <tr>
                <th>Date</th>
                <th>Department</th>
                <th>Doctor</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>
                  <button
                    className="uk-button-link nreg uk-button-primary uk-width-1-1"
                    uk-switcher-item="next"
                  >
                    Rebook
                  </button>
                </td>
              </tr>
              <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>
                  <button
                    className="uk-button-link nreg uk-button-primary uk-width-1-1"
                    uk-switcher-item="next"
                  >
                    Rebook
                  </button>
                </td>
              </tr>
              <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>
                  <button
                    className="uk-button-link nreg uk-button-primary uk-width-1-1"
                    uk-switcher-item="next"
                  >
                    Rebook
                  </button>
                </td>
              </tr>
              <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>
                  <button
                    className="uk-button-link nreg uk-button-primary uk-width-1-1"
                    uk-switcher-item="next"
                  >
                    Rebook
                  </button>
                </td>
              </tr>
              <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>
                  <button
                    className="uk-button-link nreg uk-button-primary uk-width-1-1"
                    uk-switcher-item="next"
                  >
                    Rebook
                  </button>
                </td>
              </tr>
              <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>
                  <button
                    className="uk-button-link nreg uk-button-primary uk-width-1-1"
                    uk-switcher-item="next"
                  >
                    Rebook
                  </button>
                </td>
              </tr>
              <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>
                  <button
                    className="uk-button-link nreg uk-button-primary uk-width-1-1"
                    uk-switcher-item="next"
                  >
                    Rebook
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default List;
