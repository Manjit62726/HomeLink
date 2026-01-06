// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homelink-2ad90.firebaseapp.com",
  projectId: "homelink-2ad90",
  storageBucket: "homelink-2ad90.appspot.com",
  messagingSenderId: "957149556859",
  appId: "1:957149556859:web:00123b291ce6c40211b2de",
  measurementId: "G-TT2RXP1PG0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);