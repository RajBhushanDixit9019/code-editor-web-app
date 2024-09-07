import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CodeEditor from './components/CodeEditor';
import PythonPlayground from './components/PythonPlayground'; // Import the PythonPlayground component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/python-playground" element={<PythonPlayground />} /> {/* New route for PythonPlayground */}
      </Routes>
    </Router>
  );
};

export default App;
