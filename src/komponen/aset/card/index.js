import React, { Component } from "react";
import { Card, Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { connect } from "react-redux";
import FirebaseContext from "../../../firebase/FirebaseContext";

class CardDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDonation: [],
      modalOpen: false,
      progressPost: 0,
      title: "",
      detail: "",
      maxDonasi: "",
      foto: "",
      postId: "123234",
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await this.props.getData.getDataPostCharity((tangkapDataPost) => {
      this.setState({
        cardDonation: tangkapDataPost,
      });
    });
    // console.log(respon);
    // console.log(this.state.dataPost);
  };

  openModal = (value) => {
    this.setState({
      openModal: !this.state.openModal,
      title: value.data.title,
      detail: value.data.detail,
      maxDonasi: value.data.maxDonasi,
      postId: value.id,
      progressPost: value.data.progressPost,
    });
  };

  closeModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  updateData = () => {
    this.props.getData
      .updateDataPostCharity(this.state)
      .then((respon) => {
        console.log(respon);
        this.closeModal();
        this.props.tambahData();
      })
      .catch((eror) => {
        console.error(eror);
      });
  };

  changeSate = (input) => {
    this.setState({
      [input.target.id]: input.target.value,
    });
  };

  render() {
    return (
      <>
        {this.state.cardDonation.map((value, index) => {
          return (
            <Card style={{ width: "18rem" }} key>
              <Card.Img variant="top" src={value.data.foto} />
              <Card.Body>
                <Card.Title>{(index + 1, value.data.title)}</Card.Title>
                <Card.Text>{value.data.detail}</Card.Text>

                <Card.Text>
                  <label>Target Donasi:..... </label>
                  Rp.
                  {new Intl.NumberFormat(["ban", "id"]).format(
                    value.data.maxDonasi
                  )}
                </Card.Text>
                <Card.Text>
                  <label>Progress Donasi:..... </label>
                  Rp.
                  {new Intl.NumberFormat(["ban", "id"]).format(
                    value.data.progressPost
                  )}
                </Card.Text>
                <Button variant="primary" onClick={() => this.openModal(value)}>
                  Donasi
                </Button>
              </Card.Body>
            </Card>
          );
        })}
        <Modal show={this.state.openModal}>
          <Modal.Header>
            <Modal.Title>Silahkan {this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Rp.
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="number"
                id="progressPost"
                onChange={this.changeSate}
                value={this.state.progressPost}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.updateData}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

class DonationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FirebaseContext.Consumer>
        {(getData) => <CardDonation {...this.props} getData={getData} />}
      </FirebaseContext.Consumer>
    );
  }
}

export default DonationCard;
// const stateRed = (state) => ({
//   statePostEvent: state.dataPostEvent.dataPostEvent,
// });

// export default connect(stateRed, null)(CardDonation);
