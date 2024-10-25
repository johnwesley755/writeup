// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 p-6 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-white"
        >
          WriteUp ✨
        </motion.h1>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex gap-8 text-white text-lg`}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/new-blog" className="hover:underline">
            Create Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
