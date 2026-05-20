// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx8l4_29ZtA1Ueq9wQaJETUmqhzfUT5H4",
  authDomain: "todo-app-bcf93.firebaseapp.com",
  projectId: "todo-app-bcf93",
  storageBucket: "todo-app-bcf93.firebasestorage.app",
  messagingSenderId: "272350965353",
  appId: "1:272350965353:web:1b4fa19bae48634f39fcf8",
  measurementId: "G-1ZQD744MRE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
