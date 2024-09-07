import React from 'react';
import './Loader.css'; // Ensure this file contains the updated CSS

const Loader = ({ playgroundType }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        
      </div>
      <p className="loader-message">
        {playgroundType === 'JavaScript'
          ? 'Loading JavaScript Playground...'
          : playgroundType === 'Python'
          ? 'Loading Python Playground...'
          : 'Loading...'}
      </p>
    </div>
  );
};

export default Loader;
