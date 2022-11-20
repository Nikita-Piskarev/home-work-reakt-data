import React, { Component } from "react";

class ButtonStartStop extends Component {
  render() {
    const { isChoice, StartStopTime } = this.props;
    const styleBtnStartStop = {
      color: isChoice ? "green" : "red",
      backgroundColor: "aquamarine",
      margin: "0 auto",
      padding: "10px",
      border: "1px solid black",
      borderRadius: "10px",
    };
    return (
      <button style={styleBtnStartStop} onClick={StartStopTime}>
        {isChoice ? "Start" : "Stop"}
      </button>
    );
  }
}

export default ButtonStartStop;
