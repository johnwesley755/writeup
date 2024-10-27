// src/pages/Portfolio.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";

const Portfolio = () => {
  return (
    <div className="text-gray-100">
      <Hero />
      <About />
      <Skills />
      <Projects />  
      <Timeline />
    </div>
  );
};

export default Portfolio;
