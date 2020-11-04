import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAMTqZ4Rfs4-kwhzuTEWvZJcf1hb6_elzE",
  authDomain: "threader-706a0.firebaseapp.com",
  databaseURL: "https://threader-706a0.firebaseio.com",
  projectId: "threader-706a0",
  storageBucket: "threader-706a0.appspot.com",
  messagingSenderId: "711714504080",
  appId: "1:711714504080:web:7f42ba3482ed2574888715",
  measurementId: "G-ZKRWTK8BQ2"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebaseApp.firestore().settings({
  timestampsInSnapshots: true
});

export default firebaseApp.firestore();