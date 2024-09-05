// LandingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import './LandingPage.css'; // Make sure to create and import the CSS for the landing page

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/code-editor');
    }, 2000); // 2 seconds delay to show the loader
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Code Playground</h1>
        <p className="landing-description">
          Dive into an interactive JavaScript playground. Write, run, and test your code in a sleek and powerful editor. Ready to get started?
        </p>
        <button className="cta-button" onClick={handleNavigate}>
          JavaScript Playground
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
