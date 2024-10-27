// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Navbar */}
      <header className="bg-gray-900 text-white fixed w-full z-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <Link to="/">WriteUp</Link>
          </h1>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link to="/new" className="hover:text-blue-400">
              Create Blog
            </Link>
            <Link to="/portfolio" className="hover:text-blue-400">
              Portfolio
            </Link>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-90 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6">
          <h2 className="text-5xl font-extrabold mb-4">WriteUp</h2>
          <nav className="space-y-4">
            <Link
              to="/"
              onClick={toggleSidebar}
              className="block font-bold text-white hover:text-blue-400 text-lg"
            >
              Home
            </Link>
            <Link
              to="/new"
              onClick={toggleSidebar}
              className="block font-bold text-white hover:text-blue-400 text-lg"
            >
              Create Blog
            </Link>
            <Link
              to="/portfolio"
              onClick={toggleSidebar}
              className="block font-bold text-white hover:text-blue-400 text-lg"
            >
              Portfolio
            </Link>
          </nav>
        </div>
      </div>

      {/* Spacer to Push Content Down */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;
