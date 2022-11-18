import React, { Component } from "react";
import { list } from "..";
import styles from "./ListTimer.module.scss";
class ListTimer extends Component {
  render() {
    const listTimer = list.map((time, index) => (
      <li className={styles.li} key={index}>
        {index + 1}.Куг : {time.huor} : {time.minutes} : {time.second}
      </li>
    ));
    return <ul>{listTimer}</ul>;
  }
}

export default ListTimer;
