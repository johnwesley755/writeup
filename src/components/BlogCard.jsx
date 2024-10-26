// src/components/BlogCard.jsx
import { Link } from "react-router-dom";

const BlogCard = ({ blog, index }) => {
  if (!blog) {
    return <div className="p-4 text-red-500">Blog data not found!</div>;
  }

  return (
    <Link
      to={`/blog/${index}`}
      className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4"
    >
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className="text-gray-300">{blog.content.substring(0, 100)}...</p>
    </Link>
  );
};

export default BlogCard;
