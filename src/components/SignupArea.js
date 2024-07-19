import LoginPage from '../LoginPage';
import './styles.css'
function SignupArea() {
  return (
    <div className="signup-area">
      <div>
        <h1 style={{ fontSize: "30px" }}>Signup  Here</h1>
      </div>

      <div>
        <h3>Hey are you excited to write your first line of code here!</h3>
      </div>

      <div>
        <input type="text" placeholder="Name..." className="input-style" />
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
          <span>Already a User?</span>
          <span> </span>
          <a href={{LoginPage}} style={{textDecoration: "none"}}>
            <u>Login</u>
          </a>
          
        </div>
        <div>
          <button
            type="submit"
            className="custom-button" // Apply the CSS class
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupArea;
