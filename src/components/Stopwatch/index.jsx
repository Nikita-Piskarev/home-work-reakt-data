import React, { Component } from "react";
import styles from "./Stopwatch.module.scss";
import ButtonStartStop from "./ButtonStartStop";

let timer = { huor: 0, minutes: 0, second: 0, isChoice: false };

class Stopwatch extends Component {
  state = {
    ...timer,
    listTimer: [],
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
              StartStopTime={this.StartStopTime}
              isChoice={isChoice}
            />
            <button className={styles.btn} onClick={this.SaveTime}>
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
