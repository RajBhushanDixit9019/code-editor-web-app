// Loader.js
import React from 'react';
import './Loader.css'; // Make sure to create and import the CSS for the loader

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading Code Editor...</p>
    </div>
  );
};

export default Loader;
