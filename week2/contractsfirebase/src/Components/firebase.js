import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBZNhvHV_ND0LVqvsgSooKNXUmGEcj_wOE",
  authDomain: "contracts-d5a91.firebaseapp.com",
  databaseURL: "https://contracts-d5a91.firebaseio.com",
  projectId: "contracts-d5a91",
  storageBucket: "contracts-d5a91.appspot.com",
  messagingSenderId: "920860628266"
};

firebase.initializeApp(config);
export default firebase;
