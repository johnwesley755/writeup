// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth to access Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyDa_7zLM2KPPMAFvqO-WhuMRLR8CVMaDmI",
  authDomain: "writeup-8950a.firebaseapp.com",
  projectId: "writeup-8950a",
  storageBucket: "writeup-8950a.firebasestorage.app",
  messagingSenderId: "212212657888",
  appId: "1:212212657888:web:9b471f2821106dd7706a85",
  measurementId: "G-T99GP0KVMV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Use getAuth to create an auth instance
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, app, db, analytics };
