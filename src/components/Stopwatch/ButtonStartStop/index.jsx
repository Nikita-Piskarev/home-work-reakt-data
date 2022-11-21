import React, { Component } from "react";
import styles from "../Stopwatch.module.scss";

class ButtonStartStop extends Component {
  render() {
    const { isChoice, StartStopTime } = this.props;
    const dinamicStyleBtn = isChoice ? styles.btn : styles.btnRed;
    return (
      <button className={dinamicStyleBtn} onClick={StartStopTime}>
        {isChoice ? "Start" : "Stop"}
      </button>
    );
  }
}

export default ButtonStartStop;
