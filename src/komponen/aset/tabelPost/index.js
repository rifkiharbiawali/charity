import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FirebaseContext from "../../../firebase/FirebaseContext";
import { connect } from "react-redux";

class TabelPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPost: [],
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
    await this.props.getData.getDataPostCharity().then((respon) => {
      console.log(respon);
      this.setState({
        dataPost: respon,
      });
    });

    console.log(this.state.dataPost);
  };

  render() {
    // this.getData();
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
            </tr>
          </thead>
          {this.state.dataPost.map((value, index) => {
            // this.getData();
            return (
              <tbody>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.data.title}</td>
                  <td>{value.data.detail}</td>
                  <td>{value.data.maxDonasi}</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
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
