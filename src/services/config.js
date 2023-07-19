import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-proyecto-ecommerce.firebaseapp.com",
  projectId: "react-proyecto-ecommerce",
  storageBucket: "react-proyecto-ecommerce.appspot.com",
  messagingSenderId: "439865920596",
  appId: "1:439865920596:web:fa8b0e6cf938dac50531c1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);