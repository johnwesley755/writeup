// src/pages/NewBlogForm.jsx
import { useState } from "react";
import Button from "../components/Button";

const NewBlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content, code });
  };

  return (
    <div className="container mx-auto p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-md"
      >
        <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 border rounded-md"
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 mb-4 border rounded-md"
        />
        <textarea
          placeholder="Code Snippet"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-3 mb-4 border rounded-md"
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default NewBlogForm;
