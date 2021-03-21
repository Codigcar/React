import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvH4Q6G7OQyx9EEAx-QkaUNumXaohCTiI",
    authDomain: "react-app-4f3d9.firebaseapp.com",
    projectId: "react-app-4f3d9",
    storageBucket: "react-app-4f3d9.appspot.com",
    messagingSenderId: "164628278666",
    appId: "1:164628278666:web:75197dc6c27f335ee92c73"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // referencia a firestore
  const db = firebase.firestore();

  // para autenticacion con google
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase
  }