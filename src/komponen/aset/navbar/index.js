import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hi Rifki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Your Donation</Nav.Link>
            <Nav.Link href="#link">Our Activities</Nav.Link>
            <Nav.Link href="#link">Contuct Us</Nav.Link>
          </Nav>

          <Button variant="danger">Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
