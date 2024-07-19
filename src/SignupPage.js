import AppHeader from "./components/AppHeader";
import SignupArea from "./components/SignupArea";
function SignupPage() {
  return (
    <div style={{
        margin:'0 auto',
    }}>
      <div>
        <AppHeader />
      </div>

      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
      }}>
        <SignupArea/>
      </div>
    </div>
  );
}

export default SignupPage;
