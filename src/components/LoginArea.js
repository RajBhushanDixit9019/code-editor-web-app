import React from "react";
import "./styles.css";

function LoginArea() {
  return (
    <div className="login-area">
      <div>
        <h1 style={{ fontSize: "50px" }}>Login Here</h1>
      </div>

      <div>
        <h3>Hey are you excited to write your first line of code here!</h3>
      </div>

      <div>
        <input type="text" placeholder="Codername..." className="input-style" />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password..."
          className="input-style"
        />
      </div>

      <div className="inline-div">
        <div>
          <span>New User?</span><span>         </span>
          <a>
            <u>Signup</u>
          </a>
        </div>
        <div>
          <button
            type="submit"
            className="custom-button" // Apply the CSS class
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginArea;
