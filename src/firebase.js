// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
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
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db, analytics };
