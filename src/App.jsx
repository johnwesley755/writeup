// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider for authentication context
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ForgotPasswordForm from "./pages/ForgotPasswordForm";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import NewBlogForm from "./pages/NewBlogForm";
import Portfolio from "./pages/Portfolio";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-gray-100">
          <div className="flex-grow">
            <Header />
            <main className="p-6">
              <Routes>
                <Route path="/" element={<Home blogs={blogs} />} />
                <Route path="/blog/:id" element={<BlogPage blogs={blogs} />} />
                <Route
                  path="/new"
                  element={<NewBlogForm addBlog={addBlog} />}
                />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route
                  path="/forgot-password"
                  element={<ForgotPasswordForm />}
                />
              </Routes>
            </main>
            <Footer />
            <ToastContainer // Toast notifications for user feedback
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
