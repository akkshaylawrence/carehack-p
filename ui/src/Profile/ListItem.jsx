import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.clickLink = this.clickLink.bind(this);
  }
  clickLink(event) {
    event.preventDefault();
    this.props.clickLink(this.props.row);
  }
  render() {
    const { row } = this.props;
    return (
      <tr>
        <td>{row.adate}</td>
        <td>{row.spec}</td>
        <td>{row.doctor}</td>
        <td>
          <button
            className="uk-button-link nreg uk-button-primary uk-width-1-1"
            type="button"
            onClick={this.clickLink}
          >
            Rebook
          </button>
        </td>
      </tr>
    );
  }
}

export default ListItem;
