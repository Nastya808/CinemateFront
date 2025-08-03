import "./ChooseMethod.css";
import GoogleIcon from "../../Components/Icons/GoogleIcon";
import FacebookIcon from "../../Components/Icons/FacebookIcon";
import EmailIcon from "../../Components/Icons/EmailIcon";
import { Link, useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../Services/authService";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const ChooseMethod = () => {
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const googleRes = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const email = googleRes.data.email;

        // Отправка email на backend
        await loginWithGoogle(email);

        // Перенаправление
        navigate("/login-google");
      } catch (err) {
        console.error("Google login failed", err);
      }
    },
    onError: (error) => console.error("Google login error", error),
  });

  const handleFacebookLogin = () => {
    // Заглушка, пока не реализован Facebook OAuth
    alert("Facebook login not implemented yet.");
  };

  return (
    <div className="auth-choice-container">
      <h2 className="choice-title">Create an account</h2>

      <button className="social-button google" onClick={() => googleLogin()}>
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
        <span className="link"> Terms of Use </span> and
        <span className="link"> Privacy Policy</span>.
      </p>
    </div>
  );
};

export default ChooseMethod;
