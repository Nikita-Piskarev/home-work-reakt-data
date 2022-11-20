import "./App.css";
import Stopwatch from "./components/Stopwatch";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <section>
        <Stopwatch />
      </section>
    );
  }
}

export default App;
