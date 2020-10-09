import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { Component } from "react";

// const konfigurasi = (key) => {
//   return process.env["REACT_APP_FIREBASE_" + key];
// };

const konfig = {
  // apiKey: konfigurasi("API_KEY"),
  // authDomain: konfigurasi("AUTH_DOMAIN"),
  // databaseURL: konfigurasi("DATABASE_URL"),
  // projectId: konfigurasi("PROJECT_ID"),
  // storageBucket: konfigurasi("STORAGE_BUCKET"),
  apiKey: "AIzaSyBBHD9RnlJg6c8lXZJMDvLGT5V17zKiZwU",
  authDomain: "charityfinalproject-6a34a.firebaseapp.com",
  databaseURL: "https://charityfinalproject-6a34a.firebaseio.com",
  projectId: "charityfinalproject-6a34a",
  storageBucket: "charityfinalproject-6a34a.appspot.com",
};

class Firebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    };
    app.initializeApp(konfig);
    this.database = app.database();
    // console.log(process.env["REACT_APP_FIREBASE_"]);
  }

  // changePostId = () => {
  //   this.setState({
  //     postId: this.state.postId + 1,
  //   });
  // };

  addDataPostCharity = (data) => {
    return this.database.ref("postCharity/").push({
      title: data.title,
      detail: data.detail,
      maxDonasi: data.maxDonasi,
      foto: data.foto,
      progressPost: 0,
    });
  };

  updateDataPostCharity = (data) => {
    return this.database.ref("postCharity/" + data.postId).set({
      title: data.title,
      detail: data.detail,
      maxDonasi: data.maxDonasi,
      foto: data.foto,
      progressPost: data.progressPost,
    });
  };

  getDataPostCharity = (ambilDataFirebase) => {
    let urlData = this.database.ref("postCharity");
    // return new Promise((Resolve, Reject) => {
    urlData.on("value", (snapshot) => {
      // updateStarCount(postElement, snapshot.val());
      let data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });

      console.log(data);
      ambilDataFirebase(data);
      // Resolve(data);
    });
    // });
  };

  deleteDataPostCharity = (deleteData) => {
    return this.database.ref("postCharity/" + deleteData.id).remove();
  };
}

// const kirimData = (despatch) => ({
//   kirim: () => despatch({ type: "TAMBAH_DATA", value: this.state.postData }),
// });

export default Firebase;
