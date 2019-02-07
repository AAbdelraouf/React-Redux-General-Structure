
import React, {Component} from 'react';
import * as firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBVmDIYTn-PJUBbA-epsI4aaqtRYvmUq30",
    authDomain: "witnesseye-d2e7e.firebaseapp.com",
    databaseURL: "https://witnesseye-d2e7e.firebaseio.com",
    projectId: "witnesseye-d2e7e",
    storageBucket: "witnesseye-d2e7e.appspot.com",
    messagingSenderId: "410854823515"
};
firebase.initializeApp(config);

export default !firebase.apps.length ? firebase.initializeApp(config): firebase.app();