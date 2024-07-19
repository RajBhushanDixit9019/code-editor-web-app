import AppHeader from ".//components/AppHeader";
import LoginArea from ".//components/LoginArea";
function LoginPage() {
  return (
    <div
      style={{
        margin: "0 auto",
      }}>
      <div>
        <AppHeader />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
        }}>
        <LoginArea />
      </div>
    </div>
  );
}

export default LoginPage;
