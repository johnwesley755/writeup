// src/pages/BlogPage.jsx
import { useParams } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";

const BlogPage = () => {
  const { id } = useParams();
  const blog = {
    title: "Intro to React",
    content: "React is a library for building UIs efficiently.",
    code: `const HelloWorld = () => <h1>Hello, World!</h1>;`,
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{blog.title}</h1>
      <p className="text-gray-700 mb-6">{blog.content}</p>
      <CodeBlock code={blog.code} />
    </div>
  );
};

export default BlogPage;
