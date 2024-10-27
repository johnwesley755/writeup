// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const aboutData = [
    {
      title: "Cybersecurity Expertise",
      description: "Experienced in penetration testing and risk mitigation.",
      emoji: "🔒",
    },
    {
      title: "AI Enthusiast",
      description: "Passionate about leveraging AI for innovative solutions.",
      emoji: "🤖",
    },
    {
      title: "Cloud Computing",
      description: "Skilled in deploying and managing cloud infrastructure.",
      emoji: "☁️",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
        <p className="mb-4 text-gray-300">
          Passionate about penetration testing while also leveraging AI and
          Cloud. Eager to contribute expertise in Cybersecurity, Cloud, and AI
          to tackle real-world challenges.
        </p>
        <p className="text-lg text-gray-400">
          🚀 Always ready to learn and adapt! 📚
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.emoji} {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
