// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4tNCUYdtI0HZr6oanAGoMxuRJEE9BgEQ",
  authDomain: "authdemo-728a9.firebaseapp.com",
  projectId: "authdemo-728a9",
  storageBucket: "authdemo-728a9.appspot.com", // ✅ Corrected
  messagingSenderId: "297347622244",
  appId: "1:297347622244:web:63d560647be5b8878d0671"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
