// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlLfulDOnOVkQYGylQvF4fAzYdQ14pewU",
  authDomain: "react-chat-app-acfce.firebaseapp.com",
  projectId: "react-chat-app-acfce",
  storageBucket: "react-chat-app-acfce.appspot.com",
  messagingSenderId: "965772325708",
  appId: "1:965772325708:web:e723b7f2a3e580ecdb55e9",
  measurementId: "G-KGKGNNVLP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);