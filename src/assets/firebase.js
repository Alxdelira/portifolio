// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmh2Acyh0oLzoKECGwzyWX-mNik03rXvU",
  authDomain: "portifolio-17808.firebaseapp.com",
  projectId: "portifolio-17808",
  storageBucket: "portifolio-17808.appspot.com",
  messagingSenderId: "603226169726",
  appId: "1:603226169726:web:20189e2b4a0065ed38532f",
  measurementId: "G-GJTE3ZX257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);