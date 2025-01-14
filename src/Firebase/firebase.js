// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJpQNYFEogg0NsnGKpLuwpP17xPIlYy0w",
  authDomain: "clone-1daa9.firebaseapp.com",
  projectId: "clone-1daa9",
  storageBucket: "clone-1daa9.appspot.com",
  messagingSenderId: "771449765375",
  appId: "1:771449765375:web:d6ed114ceb925093ee3bca",
  measurementId: "G-4FXE7YCGVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
