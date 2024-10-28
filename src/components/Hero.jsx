// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; // Import the Typewriter component
import profileImage from "../assets/krithi-sri.jpg";
import resumePdf from "../assets/Profile.pdf"; // Ensure the PDF path is correct

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = resumePdf;
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="flex flex-col items-center h-screen text-center p-6">
      <motion.img
        src={profileImage}
        alt="Krithik Srinivas"
        className="w-60 h-60 rounded-full border-4 border-white mb-8 mt-4 shadow-lg glow"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        className="text-6xl font-extrabold mb-4 text-gradient"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Krithik Srinivas 👨‍💻
      </motion.h1>
      <motion.div
        className="text-2xl font-extrabold mb-2 text-gradients tracking-wide"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Typewriter Effect */}
        <Typewriter
          words={["Cybersecurity", "Artificial Intelligence", "Pre-Final Year Student"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.div>
      <motion.p
        className="text-xl text-gray-400"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        🌟 Passionate about technology and innovation! 🌟
      </motion.p>
      <div className="mt-8 flex space-x-4">
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-transparent bg-clip-text px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400 glow border"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/projects")}
        >
          View Projects
        </motion.button>
        <motion.button
          className="bg-gradient-to-r from-green-500 to-teal-500 text-transparent font-bold bg-clip-text px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-green-400 glow border"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadResume}
        >
          Download Resume
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
