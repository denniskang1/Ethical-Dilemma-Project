import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyACnqIwtMk58qcWMwltsdJtfp31ef3LE9A",
    authDomain: "cs459-ethical-dilemma.firebaseapp.com",
    databaseURL: "https://cs459-ethical-dilemma.firebaseio.com",
    projectId: "cs459-ethical-dilemma",
    storageBucket: "cs459-ethical-dilemma.appspot.com",
    messagingSenderId: "639475277096",
    appId: "1:639475277096:web:76897b378e0976fd18441d"
};
  
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

export default db;
