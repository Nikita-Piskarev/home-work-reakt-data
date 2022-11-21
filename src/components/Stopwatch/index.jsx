import React, { Component } from "react";
import ButtonStartStop from "./ButtonStartStop";
import styles from "./Stopwatch.module.scss";

let timer = { huor: 0, minutes: 0, second: 0 };

class Stopwatch extends Component {
  state = {
    ...timer,
    listTimer: [],
    isChoice: false,
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

  startStopTime = () => {
    const { isChoice } = this.state;

    this.setState({
      ...this.state,
      isChoice: !isChoice,
    });

    if (isChoice) {
      this.timerId = setInterval(this.timer, 1000);
    }
  };

  saveTime = () => {
    const { huor, second, minutes } = this.state;

    this.setState({
      listTimer: [...this.state.listTimer, { huor, second, minutes }],
    });
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
    const { minutes, huor, second, isChoice, listTimer } = this.state;
    const list = listTimer.map((time, index) => (
      <li className={styles.li} key={index}>
        {index + 1}.Куг : {time.huor} : {time.minutes} : {time.second}
      </li>
    ));

    return (
      <div className={styles.wraperArticle}>
        <article className={styles.article}>
          <div className={styles.timer}>
            {huor} : {minutes} : {second}
          </div>
          <div className={styles.btnWraper}>
            <button className={styles.btn} onClick={this.isRestart}>
              Restart
            </button>
            <ButtonStartStop
              StartStopTime={this.startStopTime}
              isChoice={isChoice}
            />
            <button className={styles.btn} onClick={this.saveTime}>
              Save
            </button>
          </div>
        </article>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default Stopwatch;
