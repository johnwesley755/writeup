// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "Linux",
    "MySQL",
    "Burp Suite",
    "Penetration Testing",
    "AI & ML",
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">Top Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 glow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{skill} 🚀</h3>
              <p className="text-gray-400">Skill Level: Intermediate</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
