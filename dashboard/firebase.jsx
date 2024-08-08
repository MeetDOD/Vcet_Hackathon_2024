// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDizzQ_sHDM-fpR5ULGK2vI2fxwinCj1-M",
  authDomain: "hack-dash.firebaseapp.com",
  projectId: "hack-dash",
  storageBucket: "hack-dash.appspot.com",
  messagingSenderId: "376994205006",
  appId: "1:376994205006:web:433ad1ef668f4ec533a21f",
  measurementId: "G-6JGFXWTMXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);