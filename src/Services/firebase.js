import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Replace with your actual Firebase project config later
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "temple-gaming-pals.firebaseapp.com",
  projectId: "temple-gaming-pals"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // For saving User/Games [cite: 10]
export const auth = getAuth(app);     // For Temple Email Auth [cite: 8]
