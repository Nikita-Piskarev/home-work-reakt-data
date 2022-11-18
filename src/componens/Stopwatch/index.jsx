import React, { Component } from "react";
import ListTimer from "./ListTimer";
import styles from "./Stopwatch.module.scss";

let timer = { huor: 0, minutes: 0, second: 0, isChoice: false };
const listTimer = [];

class Stopwatch extends Component {
  state = {
    ...timer,
  };
  timer = () => {
    const { huor, second, minutes } = this.state;

    this.setState({
      ...this.state,
      second: second + 1,
    });

    if (second === 60) {
      this.setState({
        ...this.state,
        minutes: minutes + 1,
        second: 0,
      });
    }

    if (minutes === 60) {
      this.setState({
        ...this.state,
        huor: huor + 1,
        minutes: 0,
        second: 0,
      });
    }
  };

  isRestart = () => {
    this.setState({
      ...timer,
    });
  };

  StartStopTime = () => {
    const { isChoice } = this.state;

    this.setState({
      ...this.state,
      isChoice: !isChoice,
    });

    if (isChoice) {
      this.timerId = setInterval(this.timer, 1000);
    }
  };

  SaveTime = () => {
    const { huor, second, minutes, isChoice } = this.state;

    listTimer.push({ huor, second, minutes, isChoice });
    console.log("test");
  };

  componentDidMount() {
    this.timerId = setInterval(this.timer, 1000);
  }

  componentDidUpdate() {
    const { isChoice } = this.state;

    if (isChoice) {
      clearInterval(this.timerId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { minutes, huor, second, isChoice } = this.state;

    return (
      <div className={styles.wraperArticle}>
        <article className={styles.article}>
          <div className={styles.timer}>
            {huor} : {minutes} : {second}
          </div>
          <div className={styles.btnWraper}>
            {" "}
            <button className={styles.btn} onClick={this.StartStopTime}>
              {isChoice ? "Start" : "Stop"}
            </button>
            <button className={styles.btn} onClick={this.isRestart}>
              Restart
            </button>
            <button className={styles.btn} onClick={this.SaveTime}>
              Save
            </button>
          </div>
        </article>

        <ListTimer />
      </div>
    );
  }
}

export default Stopwatch;
export const list = listTimer;
