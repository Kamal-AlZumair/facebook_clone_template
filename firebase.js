import firebase from "firebase";
import  "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_Ux7TA0xrI2Trk_h6lN9SHQ2EEhPB0FU",
  authDomain: "facebook-clone-5dff3.firebaseapp.com",
  projectId: "facebook-clone-5dff3",
  storageBucket: "facebook-clone-5dff3.appspot.com",
  messagingSenderId: "1051194166365",
  appId: "1:1051194166365:web:daf2ba4a442eebbe9b51b4"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export {db, storage};