import React, { Component } from "react";
import InputPost from "../aset/inputPost";
import MyNavbarAdmin from "../aset/navbarAdmin";
import TabelPost from "../aset/tabelPost";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <MyNavbarAdmin />
        <InputPost />
        <TabelPost />
      </>
    );
  }
}

export default Admin;
