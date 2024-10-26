// src/pages/Home.jsx
import BlogCard from "../components/BlogCard";

const Home = ({ blogs = [] }) => {
  return (
    <div className="min-h-[80vh] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center animate-fadeIn">
          All Blogs
        </h1>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-400 text-lg mt-12">
            No blogs available.{" "}
            <span className="underline hover:text-blue-400 transition">
              Create a new one!
            </span>
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
