// Import Firebase SDK correctly for Expo
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // ✅ Use firebase/database instead

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBagdFL-MWLko7UdNe2lmD2oa7jqPWvHMs",
  authDomain: "simple-budget-69a0f.firebaseapp.com",
  databaseURL: "https://simple-budget-69a0f-default-rtdb.firebaseio.com",
  projectId: "simple-budget-69a0f",
  storageBucket: "simple-budget-69a0f.appspot.com",
  messagingSenderId: "135276541625",
  appId: "1:135276541625:web:bdfafe85e9745921cbcd68",
  measurementId: "G-LQQBH240LH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app); // ✅ Now using Firebase-compatible Database SDK
