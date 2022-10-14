/* eslint-disable no-console */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyD11si1EXRyTV2iB4FhYvp7wUPQRkTki0w",
  authDomain: "goemon-b76dc.firebaseapp.com",
  projectId: "goemon-b76dc",
  storageBucket: "goemon-b76dc.appspot.com",
  messagingSenderId: "563385687750",
  appId: "1:563385687750:web:67d823eb114aeb4c8581c7",
  measurementId: "G-VDYN7DSYBL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app(); // if already initialized, use that one
}

export const fireStore = firebase.firestore();
// Initialize Firebase Cloud Messaging and get a reference to the service