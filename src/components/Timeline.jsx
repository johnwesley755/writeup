// src/components/Timeline.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Cybersecurity Intern",
    company: "Tech Innovations Inc.",
    date: "June 2023 - Present",
    description:
      "Assisted in penetration testing and vulnerability assessments.",
  },
  {
    title: "AI & Machine Learning Intern",
    company: "AI Solutions Ltd.",
    date: "January 2023 - May 2023",
    description: "Developed machine learning models for predictive analytics.",
  },
  {
    title: "Junior Developer",
    company: "CodeCrafters",
    date: "July 2022 - December 2022",
    description:
      "Worked on various web development projects using React and Node.js.",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 glow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold">{experience.title} 🚀</h3>
              <p className="text-gray-400 italic">{experience.company}</p>
              <p className="text-gray-300 mb-4">{experience.date}</p>
              <p className="text-gray-200">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
