import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import "./CommonEditor.css"; // Include CSS for animations
import Output from "./Output";
import ThemeDropdown from "./ThemeDropdown";

const PythonPlayground = () => {
  const [code, setCode] = useState(`# Write your Python code here\nprint('Hello, world!')`);
  const [theme, setTheme] = useState("vs-dark");
  const [showPopup, setShowPopup] = useState(false); // Popup state

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleThemeChange = (selectedOption) => {
    setTheme(selectedOption.value);
  };

  // Simplified runCode to only show the popup
  const runCode = () => {
    setShowPopup(true); // Show popup when Run Code is clicked
    setTimeout(() => {
      setShowPopup(false); // Hide popup after 3 seconds
    }, 3000);
  };

  return (
    <div className="main">
      <h1 style={{ textAlign: "center" }}>Python Playground</h1>
      <div className="top">
        <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} className="theme-dropdown" />
        <button className="run-button" onClick={runCode}>
          <><i className="fa fa-play"></i> Run Code</>
        </button>
      </div>

      {/* Show popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Python Playground will be available soon.</p>
          </div>
        </div>
      )}

      <div className="Editor-Output">
        <div className="Editor">
          <Editor
            height="60vh"
            language="python"
            theme={theme}
            value={code}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              automaticLayout: true,
              lineNumbers: "on",
              folding: true,
              quickSuggestions: true,
              formatOnType: true,
              formatOnPaste: true,
            }}
          />
        </div>
        <div className="Output">
          <Output output={"Your output will be shown here."} />
        </div>
      </div>
    </div>
  );
};

export default PythonPlayground;
