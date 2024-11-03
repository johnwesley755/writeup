// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase"; // Ensure this path correctly points to your Firebase config
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth"; // Import necessary functions

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // This will set user to null if not authenticated
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  // Sign up new users
  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Correct usage with modular SDK
    } catch (error) {
      console.error("Signup failed:", error);
      throw error; // Rethrow error to handle it in the component
    }
  };

  // Log in existing users
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Correct usage with modular SDK
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Rethrow error to handle it in the component
    }
  };

  // Log out the current user
  const logout = async () => {
    try {
      await signOut(auth); // Correct usage with modular SDK
    } catch (error) {
      console.error("Logout failed:", error);
      throw error; // Rethrow error to handle it in the component
    }
  };

  // Send password reset email
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email); // Correct usage with modular SDK
    } catch (error) {
      console.error("Error sending password reset email:", error);
      throw error; // Rethrow error to handle it in the component
    }
  };

  const value = { user, signup, login, logout, resetPassword }; // Add resetPassword to context

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for consuming the context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
