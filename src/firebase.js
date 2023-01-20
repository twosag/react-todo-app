// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBNDcnFB4uSDz-4cySVN0aXyW4F5eWsWU",
  authDomain: "react-todo-app-a9bc2.firebaseapp.com",
  projectId: "react-todo-app-a9bc2",
  storageBucket: "react-todo-app-a9bc2.appspot.com",
  messagingSenderId: "954332199185",
  appId: "1:954332199185:web:bb025399fc9fa75807f4b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)