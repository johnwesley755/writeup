import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase"; // Ensure db is imported from your firebase setup
import { doc, getDoc } from "firebase/firestore";
import CodeBlock from "../components/CodeBlock";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); // Store the blog data here
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = doc(db, "blogs", id); // Reference the specific blog document
      const blogSnapshot = await getDoc(blogDoc);

      if (blogSnapshot.exists()) {
        setBlog({ id: blogSnapshot.id, ...blogSnapshot.data() });
      } else {
        setBlog(null); // Set to null if not found
      }

      setLoading(false); // Set loading to false after fetching
    };

    fetchBlog();
  }, [id]); // Dependency on id to fetch the correct blog when the route changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-2xl font-bold animate-bounce">
          Blog not found!
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 max-w-4xl mx-auto p-5 sm:p-6 md:p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-wide">
        {blog.title}
      </h1>

      <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
        {blog.content}
      </p>

      {blog.code && (
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-blue-400">
            Code Snippet:
          </h2>
          <CodeBlock code={blog.code} />
        </div>
      )}

      {blog.image && (
        <div className="mb-6">
          <img
            src={blog.image}
            alt="Blog Screenshot"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {blog.explanation && (
        <div className="bg-gray-700 p-4 sm:p-5 rounded-lg text-white shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Explanation:
          </h2>
          <p className="leading-relaxed text-base sm:text-lg">
            {blog.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
