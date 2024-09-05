// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CodeEditor from './components/CodeEditor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
