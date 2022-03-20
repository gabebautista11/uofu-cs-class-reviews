// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhoPoznVoetIunVvhuV80aYLXIHnQ_iho",
  authDomain: "cs-class-review.firebaseapp.com",
  projectId: "cs-class-review",
  storageBucket: "cs-class-review.appspot.com",
  messagingSenderId: "709137157047",
  appId: "1:709137157047:web:387f935bcdc2b085bdb632",
  measurementId: "G-YMZJXT994J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;
