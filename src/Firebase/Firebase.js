
import React, {Component} from 'react';
import * as Firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBVmDIYTn-PJUBbA-epsI4aaqtRYvmUq30",
    authDomain: "witnesseye-d2e7e.firebaseapp.com",
    databaseURL: "https://witnesseye-d2e7e.firebaseio.com",
    projectId: "witnesseye-d2e7e",
    storageBucket: "witnesseye-d2e7e.appspot.com",
    messagingSenderId: "410854823515"
};
Firebase.initializeApp(config);

export default !Firebase.apps.length ? Firebase.initializeApp(config): Firebase.app();




