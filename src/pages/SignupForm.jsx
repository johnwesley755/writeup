// src/pages/SignupForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { useAuth } from "../context/AuthContext"; // Import the AuthContext for authentication
import { toast } from "react-toastify"; // For displaying toast notifications
import { motion } from "framer-motion"; // Import framer-motion for animations

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth(); // Access the signup function from AuthContext
  const navigate = useNavigate(); // Create a navigate instance

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password); // Call the signup function with email and password
      toast.success("Account created successfully!"); // Show success toast
      navigate("/"); // Navigate to the home page after successful signup
    } catch (error) {
      toast.error(error.message); // Show error message in toast
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl text-center text-white mb-6">Sign Up</h2>
        <div className="mb-5">
          <label
            className="block text-gray-300 text-sm font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-300 text-sm font-medium mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition"
        >
          Sign Up
        </button>
        <p className="text-gray-400 text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-400 hover:underline">
            Log in
          </a>
        </p>
      </motion.form>
    </div>
  );
};

export default SignupForm;
