import { useEffect, useState } from "react";
import FacebookIcon from "../../Components/Icons/FacebookIcon";
import "./LoginFacebook.css";

const LoginFacebook = () => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="login-fb-container">
      <h2 className="login-title">Log in</h2>
      <p className="welcome">Welcome back!</p>

      <div className="user-avatar">
        <img src={user.avatar} alt="User Avatar" />
        <div className="fb-icon-overlay">
          <FacebookIcon />
        </div>
      </div>

      <p className="email">{user.email}</p>

      <div className="account-button">
  <img src={user.avatar} alt="User Avatar" className="button-avatar" />
  <span className="account-text">Continue as {user.name}</span>
  <FacebookIcon />
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

export default LoginFacebook;
