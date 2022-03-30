// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC136phJtySm9qTQxty9GKe1wsnxur0V2g",
  authDomain: "bfcontracting-68104.firebaseapp.com",
  databaseURL: "https://bfcontracting-68104-default-rtdb.firebaseio.com",
  projectId: "bfcontracting-68104",
  storageBucket: "bfcontracting-68104.appspot.com",
  messagingSenderId: "304714458624",
  appId: "1:304714458624:web:a181e94865601aafa5dae5",
  measurementId: "G-1TS9V715FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);