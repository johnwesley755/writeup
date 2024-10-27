import { useParams } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";

const BlogPage = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs[id];

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
    <div className="mt-20 max-w-3xl mx-auto p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl">
      <h1 className="text-4xl font-extrabold mb-6 text-white tracking-wide">
        {blog.title}
      </h1>

      <p className="text-lg leading-relaxed text-gray-300 mb-6">
        {blog.content}
      </p>

      {blog.code && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">
            Code Snippet:
          </h2>
          <CodeBlock code={blog.code} />
        </div>
      )}

      {blog.image && (
        <div className="mb-8">
          <img
            src={blog.image}
            alt="Blog Screenshot"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {blog.explanation && (
        <div className="bg-gray-700 p-5 rounded-lg text-white shadow-md">
          <h2 className="text-xl font-semibold mb-3">Explanation:</h2>
          <p className="leading-relaxed">{blog.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
