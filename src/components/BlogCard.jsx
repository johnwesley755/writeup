// src/components/BlogCard.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({ id, title, snippet }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-md rounded-lg p-6 mb-6 transition-shadow hover:shadow-xl"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{snippet}</p>
      <Link
        to={`/blog/${id}`}
        className="text-indigo-600 mt-4 block hover:underline"
      >
        Read More →
      </Link>
    </motion.div>
  );
};

export default BlogCard;
