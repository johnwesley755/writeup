// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import projectImg from "../assets/project1.gif";
import projectsImg from "../assets/blog-banner.png";
import { Link } from "react-router-dom"; // Import Link from React Router

const Projects = () => {
  const projects = [
    {
      title: "Face Tracker",
      description:
        "The Face Tracker project leverages the power of deep learning, utilizing Single Shot Detector fine-tuned for a custom dataset.",
      imageUrl: projectImg,
      link: "", // Replace with actual project URL
    },
    {
      title: "Project 2",
      description: "Description of project 2 with more details.",
      imageUrl: projectsImg,
      link: "https://your-project-link.com/project2", // Replace with actual project URL
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 glow cursor-pointer text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {project.title} 🚀
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
