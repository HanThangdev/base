/* eslint-disable no-console */
import { Configs } from '@constants';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: Configs.API_KEY,
  authDomain: Configs.AUTH_DOMAIN,
  projectId: Configs.PROJECT_ID,
  storageBucket: Configs.STORAGE_BUCKET,
  messagingSenderId: Configs.MESSAGING_SENDER_ID,
  appId: Configs.APP_ID,
  measurementId: Configs.MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app(); // if already initialized, use that one
}

export const fireStore = firebase.firestore();
// Initialize Firebase Cloud Messaging and get a reference to the service