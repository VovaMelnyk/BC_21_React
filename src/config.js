import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnjZ9euMZ6mASrM-Noge2oyYiJAReZQ-c",
  authDomain: "testfirebase-80872.firebaseapp.com",
  databaseURL: "https://testfirebase-80872.firebaseio.com",
  projectId: "testfirebase-80872",
  storageBucket: "testfirebase-80872.appspot.com",
  messagingSenderId: "346009724521",
  appId: "1:346009724521:web:c6bd176a625a5125eba4f8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
