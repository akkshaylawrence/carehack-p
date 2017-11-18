import React from "react";
import { withRouter } from "react-router-dom";
import detectAnimationEvent from "../Shared/detectAnimation";

class BookComplete extends React.Component {
  constructor(props) {
    super(props);
    this.bookingComplete = this.bookingComplete.bind(this);
  }
  componentDidMount() {
    setTimeout(() => this.tick.classList.add("drawn"), 1000);
    this.animationEvent = detectAnimationEvent();
    if (this.animationEvent) {
      this.tick.addEventListener(this.animationEvent, this.bookingComplete);
    }
  }
  bookingComplete() {
    setTimeout(() => this.props.history.push("/profile"), 2000);
  }
  render() {
    return (
      <div ref={t => (this.tick = t)}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 37 37"
          style={{ enableBackground: "new 0 0 37 37" }}
          xmlSpace="preserve"
        >
          <path
            className="circ path"
            d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
          />
          <polyline
            className="tick path"
            points="11.6,20 15.9,24.2 26.4,13.8 "
          />
        </svg>
        <p className="success-text">Booking Complete</p>
      </div>
    );
  }
}

export default withRouter(BookComplete);
