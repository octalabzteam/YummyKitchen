import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDz0qKxaTCjARuL-ndDaJ1-bv0KGx583fU",
    authDomain: "yummy-kitchen-52a58.firebaseapp.com",
    projectId: "yummy-kitchen-52a58",
    storageBucket: "yummy-kitchen-52a58.appspot.com",
    messagingSenderId: "100853724478",
    appId: "1:100853724478:web:5628d3aa76aa43709ce86f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
