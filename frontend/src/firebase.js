// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi2pmDCQSmU-YQhp7BG7oJu2iwfReRnJU",
  authDomain: "boss-ongole.firebaseapp.com",
  projectId: "boss-ongole",
  storageBucket: "boss-ongole.appspot.com",
  messagingSenderId: "185146294747",
  appId: "1:185146294747:web:82c121e30d01493a7027fe",
  measurementId: "G-V02ZTHY3E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);