// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2j6eIOKwowPVOExdG4GIOH_brHfmRl_A",
  authDomain: "e-commerce-e7ca1.firebaseapp.com",
  projectId: "e-commerce-e7ca1",
  storageBucket: "e-commerce-e7ca1.appspot.com",
  messagingSenderId: "531920190322",
  appId: "1:531920190322:web:c5cf64b00c40f805d03beb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
