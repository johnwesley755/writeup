import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const NewBlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState(null);
  const [explanation, setExplanation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      content,
      code,
      image,
      explanation,
      createdAt: new Date(),
    };

    try {
      // Save to Firestore
      const docRef = await addDoc(collection(db, "blogs"), formData);

      // Update the UI
      addBlog({ id: docRef.id, ...formData });

      // Show success notification
      toast.success("Blog submitted successfully!");

      // Redirect to Home page
      navigate("/");
    } catch (error) {
      console.error("Error adding blog: ", error);
      toast.error("Failed to submit blog. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="flex-grow p-8">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-800 p-10 rounded-lg shadow-2xl hover:shadow-blue-500/40 transition-shadow duration-300"
        >
          <h2 className="text-3xl font-extrabold mb-8 text-center tracking-wide animate-pulse">
            Create a New Blog
          </h2>

          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 mb-5 bg-gray-900 rounded-lg text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            required
          />

          <textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-4 mb-5 bg-gray-900 rounded-lg text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
            rows="5"
            required
          />

          <textarea
            placeholder="Code Snippet (Optional)"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-4 mb-5 bg-gray-900 rounded-lg text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mb-5 p-3 bg-gray-900 rounded-lg text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />

          {image && (
            <div className="mb-5">
              <img
                src={image}
                alt="Preview"
                className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <textarea
            placeholder="Explanation of the Output"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            className="w-full p-4 mb-5 bg-gray-900 rounded-lg text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
            rows="3"
          />

          <button
            type="submit"
            className="w-full p-4 bg-blue-600 rounded-lg text-xl font-bold tracking-wider transform transition-all duration-300 hover:bg-blue-800 hover:scale-105 hover:shadow-lg"
          >
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBlogForm;
