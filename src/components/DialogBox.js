import React from "react";
import "./DialogBox.css"; // Import the styles for the dialog box

const DialogBox = ({ message, show, onClose }) => {
  if (!show) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <p>{message}</p>
        <button onClick={onClose} className="dialog-button">Ok</button>
      </div>
    </div>
  );
};

export default DialogBox;
