// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-7f28d.firebaseapp.com",
  projectId: "realestate-7f28d",
  storageBucket: "realestate-7f28d.appspot.com",
  messagingSenderId: "753314526356",
  appId: "1:753314526356:web:8b112e550ebadebe153081"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);