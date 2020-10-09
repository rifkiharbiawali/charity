import React, { Component } from "react";
import {
  Table,
  Button,
  Modal,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FirebaseContext from "../../../firebase/FirebaseContext";
import { connect } from "react-redux";
// import PostContext from "../inputPost";

class TabelPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPost: [],
      progressPost: 0,
      modalOpen: false,
      title: "",
      detail: "",
      maxDonasi: "",
      foto: "",
      postId: "",
    };
  }

  componentDidMount() {
    //   .then((respon) => {
    //     console.log(respon);
    //   })
    //   .catch((eror) => {
    //     console.log(eror);
    //   });
    if (this.props.tambahData) {
      this.getData();
      //   this.props.statusData();
    }
  }

  // componentWillMount() {
  //   this.getData();
  // }

  getData = async () => {
    await this.props.getData.getDataPostCharity((tangkapDataPost) => {
      this.setState({
        dataPost: tangkapDataPost,
      });
    });
    // console.log(respon);
    console.log(this.state.dataPost);
  };

  openModal = (value) => {
    console.log(value);
    this.setState({
      modalOpen: !this.state.modalOpen,
      title: value.data.title,
      detail: value.data.detail,
      maxDonasi: value.data.maxDonasi,
      postId: value.id,
      progressPost: value.data.progressPost,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  changeSate = (input) => {
    this.setState({
      [input.target.id]: input.target.value,
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

  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Judul Event</th>
              <th>Detail Event</th>
              <th>Maximal Donasi</th>
              <th>Progress Donasi</th>
              <th>Delete/Update</th>
            </tr>
          </thead>
          {this.state.dataPost.map((value, index) => {
            console.log(this.state.dataPost[0].id);
            return (
              <tbody>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.data.title}</td>
                  <td>{value.data.detail}</td>
                  <td>
                    {new Intl.NumberFormat(["ban", "id"]).format(
                      value.data.maxDonasi
                    )}
                  </td>
                  <td>
                    {new Intl.NumberFormat(["ban", "id"]).format(
                      value.data.progressPost
                    )}
                  </td>
                  <td>
                    <div>
                      <Button
                        variant="primary"
                        onClick={() => this.openModal(value)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() =>
                          this.props.getData.deleteDataPostCharity(
                            this.state.dataPost[index]
                          )
                        }
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
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
                value={this.state.title}
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
                  value={this.state.detail}
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
                value={this.state.maxDonasi}
              />
              <InputGroup>
                <Form.File id="formcheck-api-regular">
                  <Form.File.Input id="foto" onChange={this.changeSate} />
                </Form.File>
              </InputGroup>
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

class PostTabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FirebaseContext.Consumer>
        {(getData) => <TabelPost {...this.props} getData={getData} />}
      </FirebaseContext.Consumer>
    );
  }
}

const stateRedux = (state) => ({
  tambahData: state.postAdmin.tambahData,
});

const dispetchRedux = (dispetch) => ({
  statusData: () => dispetch({ type: "TAMBAH_DATA" }),
});
export default connect(stateRedux, dispetchRedux)(PostTabel);
// export default TabelPost;
