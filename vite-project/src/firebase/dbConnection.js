// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5_jxm2gKzMH7t9yM8eS7joh0Jc4XTGWU",
  authDomain: "corcheacademy.firebaseapp.com",
  projectId: "corcheacademy",
  storageBucket: "corcheacademy.appspot.com",
  messagingSenderId: "744825695985",
  appId: "1:744825695985:web:99385539058d4e6fc98350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);