import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCQ5tLN031eIliDqT7X7x4CR1nz_VXoZmg",
    authDomain: "gifter-af699.firebaseapp.com",
    databaseURL: "https://gifter-af699.firebaseio.com",
    projectId: "gifter-af699",
    storageBucket: "gifter-af699.appspot.com",
    messagingSenderId: "860483920458",
    appId: "1:860483920458:web:03905d036fe981ed3cbcb3",
    measurementId: "G-M86ZXCRYXN"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render( <App /> , document.getElementById('root') );


