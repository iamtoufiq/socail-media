import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "stuconnect-react-social-media.firebaseapp.com",

  projectId: "stuconnect-react-social-media",

  storageBucket: "stuconnect-react-social-media.appspot.com",

  messagingSenderId: "966522501299",

  appId: "1:966522501299:web:98f4f009789b0f5f6c58c6",
  measurementId: "G-0Z9S2R3KJ9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
