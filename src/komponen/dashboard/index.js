import React, { Component } from "react";
import CardDonation from "../aset/card";
import Navbar from "../aset/navbar";
import Slide from "../aset/slide";
import "./dashboard.css";
// import { Button } from "react-bootstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  alert = () => {
    alert("tes");
  };
  alert2 = () => {
    alert("tes2");
  };
  render() {
    return (
      <>
        <Navbar />
        <Slide />
        <div className="cardDonation">
          <CardDonation />
        </div>
      </>
    );
  }
}

export default Dashboard;
