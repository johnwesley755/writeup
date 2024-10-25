// src/components/CodeBlock.jsx
import { useEffect } from 'react';
import Prism from 'prismjs'; // Import Prism for syntax highlighting

const CodeBlock = ({ code, language = 'javascript' }) => {
  useEffect(() => {
    Prism.highlightAll(); // Highlight code after component mounts
  }, []);

  return (
    <div className="bg-gray-900 rounded-md p-4 mb-8 overflow-auto shadow-md">
      <pre className="language-javascript">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
