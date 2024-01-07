import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKfkEtOo9kItqi6CAHFG7X52HJA_7NPfg",
    authDomain: "vue-blog-system-6189e.firebaseapp.com",
    projectId: "vue-blog-system-6189e",
    storageBucket: "vue-blog-system-6189e.appspot.com",
    messagingSenderId: "353502369248",
    appId: "1:353502369248:web:c870763020452692c0c785"
};
  
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp,auth };
