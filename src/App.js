import React, { Component } from "react";
import "./App.css";
import Navroute from "./komponen/navroute";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navroute />
      </>
    );
  }
}

export default App;
