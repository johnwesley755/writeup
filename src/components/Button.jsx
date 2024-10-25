// src/components/Button.jsx
const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all"
  >
    {children}
  </button>
);

export default Button;
