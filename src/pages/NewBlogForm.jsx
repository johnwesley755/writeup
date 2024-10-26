// src/pages/NewBlogForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, content, code });
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Create a New Blog</h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        placeholder="Code Snippet (Optional)"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 p-3 rounded-lg hover:bg-blue-800 transition-colors"
      >
        Submit Blog
      </button>
    </form>
  );
};

export default NewBlogForm;
