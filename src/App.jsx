// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import NewBlogForm from "./pages/NewBlogForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/new-blog" element={<NewBlogForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
