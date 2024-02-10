import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC96HRAatd6rPOpox4MgfqJfDC3_ay7deo",
  authDomain: "react-chatapp-13faf.firebaseapp.com",
  projectId: "react-chatapp-13faf",
  storageBucket: "react-chatapp-13faf.appspot.com",
  messagingSenderId: "233312608950",
  appId: "1:233312608950:web:ac74d1107ccb223958fc17",
  measurementId: "G-RL5S40H387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
