// src/components/Header.jsx
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import AuthContext from "../context/AuthContext"; // Ensure the import is correct

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Redirect to home after logout
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-gray-900 text-white font-bold fixed w-full z-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.h1
            className="text-4xl max-sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/">Krithik's Blog</Link>
          </motion.h1>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-yellow-400 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/portfolio" // Link to the portfolio page
              className="hover:text-yellow-400 transition-all duration-300"
            >
              Portfolio
            </Link>
            {user &&
              (user.email === "johnwesley1024@gmail.com" ||
                user.email === "krithiksrinivas200@gmail.com") && (
                <Link
                  to="/new"
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  Create Blog
                </Link>
              )}
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="hover:text-yellow-400 transition-all duration-300"
              >
                Logout
              </button>
            )}
          </nav>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-2xl focus:outline-none transition-transform transform hover:scale-110"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Sidebar and Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50" // Full-screen overlay with sidebar on top
          onClick={closeSidebar} // Closes sidebar when clicking outside
        >
          {/* Sidebar */}
          <motion.div
            className="fixed inset-y-0 left-0 w-64 bg-gray-800 p-6 shadow-lg z-50"
            onClick={(e) => e.stopPropagation()} // Prevents sidebar click from closing
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="text-2xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Krithik's Blog
            </motion.h2>
            <nav className="space-y-6">
              <Link
                to="/"
                onClick={closeSidebar}
                className="block font-bold text-white hover:text-yellow-400 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/portfolio" // Link to the portfolio page
                onClick={closeSidebar}
                className="block font-bold text-white hover:text-yellow-400 transition duration-300"
              >
                Portfolio
              </Link>
              {user &&
                (user.email === "johnwesley1024@gmail.com" ||
                  user.email === "krithiksrinivas200@gmail.com") && (
                  <Link
                    to="/new"
                    onClick={closeSidebar}
                    className="block font-bold text-white hover:text-yellow-400 transition duration-300"
                  >
                    Create Blog
                  </Link>
                )}
              {!user ? (
                <>
                  <Link
                    to="/login"
                    onClick={closeSidebar}
                    className="block font-bold text-white hover:text-yellow-400 transition duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeSidebar}
                    className="block font-bold text-white hover:text-yellow-400 transition duration-300"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    closeSidebar();
                  }}
                  className="block font-bold text-white hover:text-yellow-400 transition duration-300"
                >
                  Logout
                </button>
              )}
            </nav>
          </motion.div>
        </div>
      )}

      {/* Spacer to Push Content Down */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;
