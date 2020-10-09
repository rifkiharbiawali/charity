import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "../admin";
import Dashboard from "../dashboard";

class Navroute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/Admin" component={Admin}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Navroute;
