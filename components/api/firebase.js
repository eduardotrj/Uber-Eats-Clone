import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCVNJw_5rZ7skYZo06ZxWThgIaH6YYAC7k",
    authDomain: "rn-uber-eats-clne.firebaseapp.com",
    projectId: "rn-uber-eats-clne",
    storageBucket: "rn-uber-eats-clne.appspot.com",
    messagingSenderId: "689580467007",
    appId: "1:689580467007:web:17163d2c5e61efa5e3698a"
    
  };
  
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;

