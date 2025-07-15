import { useEffect, useState } from "react";
import GoogleIcon from "../../Components/Icons/GoogleIcon";
import "./LoginGoogle.css";

const LoginGoogle = () => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="login-google-container">
      <h2 className="login-title">Log in</h2>
      <p className="welcome">Welcome back!</p>

      <div className="user-avatar">
        <img src={user.avatar} alt="User Avatar" />
        <div className="google-icon-overlay">
          <GoogleIcon />
        </div>
      </div>

      <p className="email">{user.email}</p>

      <div className="account-button">
        <img src={user.avatar} alt="User Avatar" className="button-avatar" />
        <span className="account-text">Continue as {user.name}</span>
        <GoogleIcon />
      </div>

      <div className="alt-links">
        <a href="#" className="link">Not you? <strong>Use another account</strong></a>
        <p className="signup">
          Don’t have an account? <a className="link" href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginGoogle;
