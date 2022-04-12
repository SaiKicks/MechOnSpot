import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHCcR9tOZagYf42ttfBNDxLNhXHRAWGxM",
  authDomain: "mechonspot-47e10.firebaseapp.com",
  projectId: "mechonspot-47e10",
  storageBucket: "mechonspot-47e10.appspot.com",
  messagingSenderId: "1048907855127",
  appId: "1:1048907855127:web:b5202412afcd924a997352"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
