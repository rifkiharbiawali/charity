import React, { Component } from "react";
import { Button, Modal, InputGroup, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FirebaseContext from "../../../firebase/FirebaseContext";
import { connect } from "react-redux";

class InputPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      title: "",
      detail: "",
      maxDonasi: "",
      foto: "",
    };
  }

  changeSate = (input) => {
    this.setState({
      [input.target.id]: input.target.value,
    });
  };

  openModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  saveData = () => {
    this.props.addData
      .addDataPostCharity(this.state)
      .then((respon) => {
        console.log(respon);
        this.openModal();
        this.props.tambahData();
      })
      .catch((eror) => {
        console.error(eror);
      });
  };

  render() {
    return (
      <>
        <Modal show={this.state.modalOpen}>
          <Modal.Header>
            <Modal.Title>Input Event Charity</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Nama Event Charity
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                id="title"
                onChange={this.changeSate}
              />
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Detail Event Charity</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  id="detail"
                  onChange={this.changeSate}
                />
              </InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Maximum Donasi
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="number"
                id="maxDonasi"
                onChange={this.changeSate}
              />
              <InputGroup>
                <Form.File id="formcheck-api-regular">
                  <Form.File.Input id="foto" onChange={this.changeSate} />
                </Form.File>
              </InputGroup>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.openModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.saveData}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        <Button variant="primary" onClick={this.openModal}>
          Tambah Event
        </Button>
      </>
    );
  }
}

class PostContext extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FirebaseContext.Consumer>
        {(addData) => <InputPost {...this.props} addData={addData} />}
      </FirebaseContext.Consumer>
    );
  }
}

const dispetchRedux = (dispetch) => ({
  tambahData: () => dispetch({ type: "TAMBAH_DATA1" }),
});
export default connect(null, dispetchRedux)(PostContext);

// export default InputPost;
