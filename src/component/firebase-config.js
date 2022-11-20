// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import {} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjK4ctaeZVoM-UgBOPxfTVZsQoezV8Pz8",
  authDomain: "transportation-web.firebaseapp.com",
  projectId: "transportation-web",
  storageBucket: "transportation-web.appspot.com",
  messagingSenderId: "519742274574",
  appId: "1:519742274574:web:697786fe47a251fccb505f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFireStore(app);
const auth = getAuth(app);
export { auth};