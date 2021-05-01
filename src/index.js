import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from "firebase"
import "firebase/firestore"

 
firebase.initializeApp({
  apiKey: "AIzaSyDgr4Nk8pFuRWMBsHnStQoP5zhRiNb0pN0",
  authDomain: "evernote-project-23fcb.firebaseapp.com",
  projectId: "evernote-project-23fcb",
  storageBucket: "evernote-project-23fcb.appspot.com",
  messagingSenderId: "790783465757",
  appId: "1:790783465757:web:1b3e0225a8cd0bc95de9f4"

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 