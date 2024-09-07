import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import './LandingPage.css';

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const [playgroundType, setPlaygroundType] = useState(''); // State for playground type
  const [isTypingComplete, setTypingComplete] = useState(false); // Typing animation completion state
  const navigate = useNavigate();

  const handleNavigateToJS = () => {
    setPlaygroundType('JavaScript'); // Set playground type
    setLoading(true);
    setTimeout(() => {
      navigate('/code-editor');
    }, 2000); // Delay for loader
  };

  const handleNavigateToPython = () => {
    setPlaygroundType('Python'); // Set playground type
    setLoading(true);
    setTimeout(() => {
      navigate('/python-playground');
    }, 2000); // Delay for loader
  };

  // Mark typing as complete after the animation
  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setTypingComplete(true);
    }, 2500); // Matches the typing animation duration

    return () => clearTimeout(typingTimer);
  }, []);

  if (loading) {
    return <Loader playgroundType={playgroundType} />; // Pass playgroundType to Loader
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className={`landing-title ${isTypingComplete ? 'typing-complete' : ''}`}>
          Welcome to Code Playground
        </h1>
        <p className="landing-description">
          Dive into an interactive code playground. Write, run, and test your <span className="inline-code">JavaScript</span> or <span className="inline-code">Python</span> code in a sleek and powerful editor. Ready to get started?
          <br /><br />
          <span className="code-block">
    <span className="inline-code keyword">const</span> <span className="inline-code variable">greeting</span> = <span className="inline-code string">"Hello, World!"</span>;
    <br />
    <span className="inline-code function">console.log</span>(<span className="inline-code variable">greeting</span>);
</span>

        </p>
        <button className="cta-button" onClick={handleNavigateToJS}>
          JavaScript Playground
        </button>
        <button className="cta-button python-button" onClick={handleNavigateToPython}>
          Python Playground
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
