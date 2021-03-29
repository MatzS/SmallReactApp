import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as firebase from "firebase";

import "../src/Layout/bootstrap.css";
import "../src/Layout/App.css";

var config = {
  apiKey: "AIzaSyDiqFfMImjI8FZ31xuqrBrrph4hi8QJkWE",
  authDomain: "imagine-6214f.firebaseapp.com",
  databaseURL: "https://imagine-6214f.firebaseio.com",
  projectId: "imagine-6214f",
  storageBucket: "imagine-6214f.appspot.com",
  messagingSenderId: "446930676547",
  appId: "1:446930676547:web:efa393ab6df8b13e",
};
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
