// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";

import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import NewBlogForm from "./pages/NewBlogForm";
import Footer from "./components/Footer";

const App = () => {
  const [blogs, setBlogs] = useState([]); // Ensure it starts as an empty array

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-gray-100">
    
        <div className="flex-grow">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Home blogs={blogs} />} />
              <Route path="/blog/:id" element={<BlogPage blogs={blogs} />} />
              <Route path="/new" element={<NewBlogForm addBlog={addBlog} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
