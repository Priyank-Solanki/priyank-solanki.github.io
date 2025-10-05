import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM__0YYIEKffYrgV_zz8waMfo0syl8Xfk",
  authDomain: "priyank-portfolio-7c963.firebaseapp.com",
  projectId: "priyank-portfolio-7c963",
  storageBucket: "priyank-portfolio-7c963.firebasestorage.app",
  messagingSenderId: "914529264085",
  appId: "1:914529264085:web:ae648a43021d4e5d6fdd5c",
  measurementId: "G-YQMJ0JLGNM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);