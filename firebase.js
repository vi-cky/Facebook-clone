import firebase from "firebase";
 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-RRPPMkYW7dKfmopVgXIgZGrC69bRmwY",
    authDomain: "facebook-messenger-clone-36eb1.firebaseapp.com",
    projectId: "facebook-messenger-clone-36eb1",
    storageBucket: "facebook-messenger-clone-36eb1.appspot.com",
    messagingSenderId: "308284027694",
    appId: "1:308284027694:web:4be0693258d4b87c2000bf",
    measurementId: "G-PMR972P7T2"
 });

 const db=firebaseApp.firestore();
 export default db;