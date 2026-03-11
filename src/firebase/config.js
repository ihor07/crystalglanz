import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANxF9Q9VjIt65kuqeo_7HNWSkV7zxps9U",
  authDomain: "crystalglanz.firebaseapp.com",
  projectId: "crystalglanz",
  storageBucket: "crystalglanz.firebasestorage.app",
  messagingSenderId: "222961474406",
  appId: "1:222961474406:web:5c15fc469f542b433bc6a7",
  measurementId: "G-D495MFRHP7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
