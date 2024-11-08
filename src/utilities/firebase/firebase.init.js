// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFY3vHXtTHnh6bS8w3JmeiBGKQr31gNXU",
  authDomain: "gh-heaven.firebaseapp.com",
  projectId: "gh-heaven",
  storageBucket: "gh-heaven.firebasestorage.app",
  messagingSenderId: "359656914862",
  appId: "1:359656914862:web:f603620df3c315b6f8d23f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;