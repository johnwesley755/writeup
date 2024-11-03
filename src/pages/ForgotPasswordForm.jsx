// src/pages/ForgotPasswordForm.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Import the AuthContext
import { toast } from "react-toastify"; // For displaying toast notifications
import { motion } from "framer-motion"; // Import framer-motion for animations

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth(); // Access the resetPassword function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email); // Use resetPassword from AuthContext
      toast.success("Password reset email sent!"); // Show success toast
    } catch (error) {
      toast.error("Error sending password reset email: " + error.message); // Show error toast
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
        <h2 className="text-3xl text-center text-white mb-6">Reset Password</h2>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-600 bg-gray-700 text-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 p-3 rounded-lg w-full hover:bg-yellow-500 transition"
        >
          Send Reset Email
        </button>
      </motion.form>
    </div>
  );
};

export default ForgotPasswordForm;
