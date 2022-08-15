import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2j6eIOKwowPVOExdG4GIOH_brHfmRl_A",
  authDomain: "e-commerce-e7ca1.firebaseapp.com",
  projectId: "e-commerce-e7ca1",
  storageBucket: "e-commerce-e7ca1.appspot.com",
  messagingSenderId: "531920190322",
  appId: "1:531920190322:web:c5cf64b00c40f805d03beb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
