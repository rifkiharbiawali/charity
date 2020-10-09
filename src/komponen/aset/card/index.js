import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

class CardDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDonation: [],
    };
  }

  render() {
    return (
      <>
        {this.props.statePostEvent.map((value, index) => {
          return (
            <Card style={{ width: "18rem" }} key>
              <Card.Img variant="top" src={value.gambar} />
              <Card.Body>
                <Card.Title>{(index + 1, value.title)}</Card.Title>
                <Card.Text>{value.detail}</Card.Text>
                <Button variant="primary" onClick={this.Edit}>
                  Donasi
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </>
      //   <Card style={{ width: "18rem" }}>
      //     <Card.Img variant="top" src={this.props.gambar} />
      //     <Card.Body>
      //       <Card.Title>{this.props.judul}</Card.Title>
      //       <Card.Text>{this.props.detail}</Card.Text>
      //       <Button variant="primary" onClick={this.props.klik}>
      //         Donasi
      //       </Button>
      //     </Card.Body>
      //   </Card>
    );
  }
}

const stateRed = (state) => ({
  statePostEvent: state.dataPostEvent.dataPostEvent,
});

export default connect(stateRed, null)(CardDonation);
