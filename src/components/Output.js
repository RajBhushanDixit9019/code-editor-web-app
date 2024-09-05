import React from 'react';
import './styles.css'; // Ensure this path is correct

function Output({ output }) {
  return (
    <div className="output">
      <div className="output-header">
        Output
      </div>
      <div className="output-content">
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default Output;
