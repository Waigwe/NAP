import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA5ZpbVGWGc4wzeQySoKCII0Rs2hU4ZUFE",
  authDomain: "nap-backend.firebaseapp.com",
  databaseURL: "https://nap-backend.firebaseio.com",
  projectId: "nap-backend",
  storageBucket: "nap-backend.appspot.com",
  messagingSenderId: "1053850142923"
};
//   firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

//instantiate auth object
const auth = firebase.auth();

const db = firebase.database();

export { auth, db };
