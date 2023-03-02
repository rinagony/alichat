// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEUEwjUQIv8p6t5qDBnbsypudA6X_F4_Y",
  authDomain: "alichat-f2e56.firebaseapp.com",
  projectId: "alichat-f2e56",
  storageBucket: "alichat-f2e56.appspot.com",
  messagingSenderId: "864366043498",
  appId: "1:864366043498:web:1f58804c5361f207c40513",
  measurementId: "G-43BENWBN18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;