// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBOWdk4iPIhSr1mCNIFuZQVBAVCU-dCiDE",
  authDomain: "react-cursos-8174b.firebaseapp.com",
  projectId: "react-cursos-8174b",
  storageBucket: "react-cursos-8174b.appspot.com",
  messagingSenderId: "1004316058969",
  appId: "1:1004316058969:web:c98e9460a962be30169848",
  measurementId: "G-00LLPS9R62"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )