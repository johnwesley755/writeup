// src/pages/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { useAuth } from "../context/AuthContext"; // Import the AuthContext for authentication
import { toast } from "react-toastify"; // For displaying toast notifications
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Access the login function from AuthContext
  const navigate = useNavigate(); // Create a navigate instance

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password); // Call the login function with email and password
      toast.success("Logged in successfully!"); // Show success toast
      navigate("/"); // Navigate to the home page after successful login
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
        <h2 className="text-3xl text-center text-white mb-6">Login</h2>
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
          Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-300">
          <Link
            to="/forgot-password"
            className="text-yellow-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <Link to="/signup" className="text-yellow-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default LoginForm;
