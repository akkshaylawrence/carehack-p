import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <div>
        <div
          className="uk-card pcard uk-card-default uk-card-body"
          uk-overflow-auto="true"
        >
          <h3 className="uk-card-title">Your Previous Appointments</h3>
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
              {this.props.data ? (
                this.props.data.map((row, index) => {
                  return (
                    <ListItem
                      row={row}
                      key={index}
                      clickLink={this.props.clickLink}
                    />
                  );
                })
              ) : (
                <tr>
                  <td>You have no past appointments</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default List;
