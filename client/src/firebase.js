// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "antoh-realty.firebaseapp.com",
  projectId: "antoh-realty",
  storageBucket: "antoh-realty.appspot.com",
  messagingSenderId: "695625254744",
  appId: "1:695625254744:web:3b7004f662b7046973872d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);