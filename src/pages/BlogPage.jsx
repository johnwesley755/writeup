// src/pages/BlogPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import CodeBlock from "../components/CodeBlock";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = doc(db, "blogs", id);
      const blogSnapshot = await getDoc(blogDoc);

      if (blogSnapshot.exists()) {
        setBlog({ id: blogSnapshot.id, ...blogSnapshot.data() });
      } else {
        setBlog(null);
      }

      setLoading(false);
    };

    fetchBlog();
  }, [id]);

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
    <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full">
      <div className="max-w-screen-md mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-100 tracking-wide break-words">
          {blog.title}
        </h1>

        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4 break-words">
          {blog.content}
        </p>

        {blog.code && (
          <div className="mb-6 overflow-x-auto bg-gray-900 rounded-lg p-4 max-w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-yellow-400">
              Code Snippet:
            </h2>
            <div className="overflow-x-auto whitespace-pre-wrap">
              <CodeBlock code={blog.code} />
            </div>
          </div>
        )}

        {blog.image && (
          <div className="mb-6">
            <img
              src={blog.image}
              alt="Blog Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {blog.explanation && (
          <div className="bg-gray-700 p-4 sm:p-5 rounded-lg text-white shadow-md break-words">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Explanation:
            </h2>
            <p className="leading-relaxed text-base sm:text-lg">
              {blog.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
