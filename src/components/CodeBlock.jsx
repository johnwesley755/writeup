// src/components/CodeBlock.jsx
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";

const CodeBlock = ({ code, language = "javascript" }) => {
  useEffect(() => {
    Prism.highlightAll(); // Highlight code after component renders
  }, []);

  return (
    <pre className="rounded-lg bg-gray-900 p-4 overflow-auto shadow-lg">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;
