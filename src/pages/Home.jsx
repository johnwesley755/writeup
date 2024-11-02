// src/pages/Home.jsx
import React from "react";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/krithi-sri.jpg";

const Home = ({ blogs = [] }) => {
  return (
    <div className="min-h-[80vh] text-white px-6 py-12 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Profile Image and Intro Text */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Section */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-4 text-transparent text-yellow-500">
              Welcome to My Blog
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              Hi, I'm Krithik Srinivas. I write about technology, cybersecurity,
              AI, and my journey as a pre-final year student. Join me as I
              explore new ideas and share insights on topics I’m passionate
              about.
            </p>
            <Link to="/contact">
              <motion.button
                className="mt-4 px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>

          {/* Profile Image with Gradient Border */}
          <div className="relative w-40 h-40 md:w-64 md:h-64 mb-6 md:mb-0 rounded-full overflow-hidden shadow-lg transform transition-all hover:scale-105 md:mr-8">
            <motion.img
              src={profileImg}
              alt="Krithik Srinivas"
              className="w-full h-full object-cover rounded-full"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-border-gradient"></div>
          </div>
        </motion.div>

        {/* Featured Post Section */}
        {blogs.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-gradient">
              Featured Post
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.slice(0, 1).map((blog, index) => (
                <BlogCard key={index} blog={blog} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Blogs Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center animate-fadeIn">
            Latest Posts
          </h2>
          {blogs.length === 0 ? (
            <p className="text-center text-gray-400 text-lg mt-12">
              No posts yet.{" "}
              <Link to="/new">
                <span className="underline hover:text-blue-400 transition">
                  Write your first post!
                </span>
              </Link>
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} index={index} />
              ))}
            </div>
          )}
        </motion.div>

        {/* Personal Call-to-Action */}
        <motion.div
          className="text-center mt-16 p-6 bg-gray-800 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gradient">
            Stay Connected
          </h3>
          <p className="text-gray-400 mb-4">
            Want to know more about my journey and insights? Subscribe to get
            updates on new posts.
          </p>
          <Link to="/contact">
            <motion.button
              className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
