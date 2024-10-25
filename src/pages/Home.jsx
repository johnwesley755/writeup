// src/pages/Home.jsx
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';

const Home = () => {
  const blogs = [
    { id: 1, title: 'Intro to React', snippet: 'Learn the basics of React.' },
    { id: 2, title: 'Vite: The Future', snippet: 'Discover Vite’s advantages.' },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
        Welcome to WriteUp 🚀
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button>Explore More Blogs</Button>
      </div>
    </div>
  );
};

export default Home;
