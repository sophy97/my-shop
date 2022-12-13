// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdLlPDYYgEOMrFpeJ3ZNjb4ZIrFDiHEuY",
  authDomain: "blog-login-3c860.firebaseapp.com",
  projectId: "blog-login-3c860",
  storageBucket: "blog-login-3c860.appspot.com",
  messagingSenderId: "822891796957",
  appId: "1:822891796957:web:40f13fc5ec4843565bfe34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
