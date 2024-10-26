// src/pages/BlogPage.jsx
import { useParams } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";

const BlogPage = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs[id];

  if (!blog) {
    return <p className="text-red-500">Blog not found!</p>;
  }

  return (
    <div className="mt-20 max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="mb-4">{blog.content}</p>
      {blog.code && <CodeBlock code={blog.code} />}
    </div>
  );
};

export default BlogPage;
