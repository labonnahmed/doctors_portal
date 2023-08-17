import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCo8bGX2fGOHjNJFtmnUF_WJsvtDj3A2Kg",
  authDomain: "doctors-portal-dentist.firebaseapp.com",
  projectId: "doctors-portal-dentist",
  storageBucket: "doctors-portal-dentist.appspot.com",
  messagingSenderId: "223475606678",
  appId: "1:223475606678:web:352b7583c3483774620eb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;