// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOigmTydikI4LdnrODJScz5XcL-gS7ZIA",
  authDomain: "react-firebase-auth-b699d.firebaseapp.com",
  projectId: "react-firebase-auth-b699d",
  storageBucket: "react-firebase-auth-b699d.appspot.com",
  messagingSenderId: "508106701335",
  appId: "1:508106701335:web:e34027812a80af2b92ba52"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore()

export default app