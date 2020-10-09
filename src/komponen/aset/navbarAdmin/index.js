import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class MyNavbarAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hi Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">User List</Nav.Link>
            <Nav.Link href="#link">Coin</Nav.Link>
          </Nav>

          <Button variant="danger">Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbarAdmin;
