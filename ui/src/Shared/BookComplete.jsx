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
  componentWillUnmount() {
    this.tick.removeEventListener(this.animationEvent, this.bookingComplete);
  }
  render() {
    return (
      <div ref={t => (this.tick = t)}>
        <div>
          <svg
            id="successAnimation"
            className=" uk-width-1-1 animated"
            xmlns="http://www.w3.org/2000/svg"
            width="247"
            height="247"
            viewBox="0 0 70 70"
          >
            <path
              id="successAnimationResult"
              fill="#D8D8D8"
              d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
            />
            <circle
              id="successAnimationCircle"
              cx="35"
              cy="35"
              r="24"
              stroke="#979797"
              strokeWidth="2"
              strokeLinecap="round"
              fill="transparent"
            />
            <polyline
              id="successAnimationCheck"
              stroke="#979797"
              strokeWidth="2"
              points="23 34 34 43 47 27"
              fill="transparent"
            />
          </svg>
          <p className="uk-text-center uk-text-lead">Booking Complete</p>
        </div>
      </div>
    );
  }
}

export default withRouter(BookComplete);
