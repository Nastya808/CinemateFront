import "./ChooseMethod.css";
import GoogleIcon from "../../Components/Icons/GoogleIcon";
import FacebookIcon from "../../Components/Icons/FacebookIcon";
import EmailIcon from "../../Components/Icons/EmailIcon";
import { Link, useNavigate } from "react-router-dom";
import { loginWithFacebook, loginWithGoogle } from "../../Services/authService";

const ChooseMethod = () => {
  const navigate = useNavigate();

  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook();
      navigate("/login-facebook");
    } catch (error) {
      console.error("Facebook login failed:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/login-google");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="auth-choice-container">
      <h2 className="choice-title">Create an account</h2>

      <button className="social-button google" onClick={handleGoogleLogin}>
        <GoogleIcon />
        Continue with Google
      </button>

      <button className="social-button facebook" onClick={handleFacebookLogin}>
        <FacebookIcon />
        Continue with Facebook
      </button>

      <Link to="/register">
        <button className="social-button email">
          <EmailIcon />
          Continue with E-mail
        </button>
      </Link>

      <label className="checkbox-container">
        <input type="checkbox" />
        I do not wish to receive news and promotions from Cinemate by email.
      </label>

      <p className="terms-text">
        By continuing, you agree to Mastersoftcloud Company’s
        <span className="link"> Terms of Use </span>
        and
        <span className="link"> Privacy Policy</span>.
      </p>
    </div>
  );
};

export default ChooseMethod;
