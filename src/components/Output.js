import React from 'react';
import './CommonEditor.css'; // Ensure this path is correct

function Output({ output }) {
  return (
    <div className="output">
      <div className="output-header">
        <h2>Output</h2>
      </div>
      <div className="output-content">
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default Output;
