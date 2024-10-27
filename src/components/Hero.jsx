// src/components/Hero.jsx
import React from "react";
import profileImage from "../assets/krithi-sri.jpg"; // Ensure this image exists
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center h-screen text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900">
      <motion.img
        src={profileImage}
        alt="Krithik Srinivas"
        className="w-60 h-60 rounded-full border-4 border-white mb-8 mt-28 shadow-lg glow"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        className="text-5xl font-bold mb-4 text-gradient"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Krithik Srinivas 👨‍💻
      </motion.h1>
      <motion.p
        className="text-xl mb-2 text-gray-300"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Cybersecurity | AI | Pre-Final Year Student
      </motion.p>
      <motion.p
        className="text-lg text-gray-400"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        🌟 Passionate about technology and innovation! 🌟
      </motion.p>
    </section>
  );
};

export default Hero;
