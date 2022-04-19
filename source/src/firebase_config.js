import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgeWP3WYyZuBj1YRtqW6rU57NauMl6x6Y",
  authDomain: "mechonspot-76d2f.firebaseapp.com",
  projectId: "mechonspot-76d2f",
  storageBucket: "mechonspot-76d2f.appspot.com",
  messagingSenderId: "973601647548",
  appId: "1:973601647548:web:6e2a344932aa5b5c9999b9",
  measurementId: "G-EGLGXFWYSS"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage};
