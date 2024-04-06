// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9gj2mjHExKz9YqsXYS864FPjkhj6baSM",
  authDomain: "netflix-search-gpt.firebaseapp.com",
  projectId: "netflix-search-gpt",
  storageBucket: "netflix-search-gpt.appspot.com",
  messagingSenderId: "347579107826",
  appId: "1:347579107826:web:5ca4808cf5772663bc036b",
  measurementId: "G-459FGLGJZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);