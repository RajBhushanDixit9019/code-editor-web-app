import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import "./CodeEditor.css";
import Output from "./Output.js";
import ThemeDropdown from "./ThemeDropdown";

const CodeEditor = () => {
  const [code, setCode] = useState("console.log('Hello, world!');");
  const [output, setOutput] = useState("your output...");
  const [theme, setTheme] = useState("vs-dark");
  const [loading, setLoading] = useState(false); // Loader state

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleThemeChange = (selectedOption) => {
    setTheme(selectedOption.value);
  };

  const runCode = () => {
    setLoading(true); // Show loader
    setTimeout(() => {
      try {
        const outputArray = [];
        const consoleBackup = console.log;
        console.log = (msg) => outputArray.push(msg);

        new Function(code)();

        console.log = consoleBackup;
        setOutput(outputArray.length ? outputArray.join("\n") : "No output");
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      } finally {
        setLoading(false); // Hide loader after 3 seconds
      }
    }, 3000); // Adjust the duration if needed
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          
        }}>
        JavaScript Playground
      </h1>
      <div className="top">
        <ThemeDropdown
          handleThemeChange={handleThemeChange}
          theme={theme}
          className="theme-dropdown"
        />
        <button className="run-button" onClick={runCode}>
          <i className="fa fa-play"></i> Run Code
        </button>
      </div>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
          <div className="loader-message">Code is processing...</div>
        </div>
      )}
      <div className="Editor-Output">
        <div className="Editor">
          <Editor
            height="60vh"
            language="javascript"
            theme={theme}
            value={code}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              automaticLayout: true,
              lineNumbers: "on", // Show line numbers
              folding: true, // Enable code folding
              suggestOnTriggerCharacters: true, // Enable autocomplete on typing
              quickSuggestions: true, // Show suggestions as you type
              parameterHints: true, // Show parameter hints
              formatOnType: true, // Format code on typing
              formatOnPaste: true, // Format code on paste
              lightbulb: { enabled: true }, // Show lightbulb for code actions
              scrollbar: {
                vertical: "auto", // Auto scrollbars for vertical overflow
                horizontal: "auto", // Auto scrollbars for horizontal overflow
              },
            }}
          />
        </div>
        <div className="Output">
          <Output output={output} />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
