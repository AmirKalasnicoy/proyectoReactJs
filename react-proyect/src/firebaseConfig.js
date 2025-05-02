import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCz2ezLizKA2Lg17psE9xgWplC2Dw_0ylk",
  authDomain: "react-proyect-entrega.firebaseapp.com",
  projectId: "react-proyect-entrega",
  storageBucket: "react-proyect-entrega.firebasestorage.app",
  messagingSenderId: "982039497264",
  appId: "1:982039497264:web:3e9e4f30d8402641263bf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);