import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import EyeIcon from "../../Components/Icons/EyeIcon";
import { useState } from "react";
import Fields from "../../Components/FormFields/FormField";
import "../../main.css"

type LoginData = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await fetch("http://localhost:5219/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        setMessage(result.message || "Login successful");
        setHasError(false);
        navigate("/home");
      } else {
        const result = await response.json();
        setMessage(result.message || "Login failed");
        setHasError(true);
      }
    } catch (error) {
      setMessage("Server error");
      setHasError(true);
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-container">
      <h1 className="logo">Cinemate</h1>
      <h2 className="login-title">Log in</h2>

      {message && (
        <p className={hasError ? "error-message" : "message"}>{message}</p>
      )}

      <div className="form-group">
        <label className="input-label">E-mail</label>
        <Fields
          placeholder="Enter your email"
          type="email"
          registerFormHook={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "Invalid email format"
            }
          })}
          hasError={!!errors.email}
          />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label className="input-label">Password</label>
        <div className="password-wrapper">
          <Fields
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
            registerFormHook={register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters"
              }
            })}
            hasError={!!errors.password}
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            <EyeIcon isVisible={showPassword} />
          </span>
        </div>
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      <button type="submit" className="login-button">Log in</button>

      <div className="extra-links">
        <a href="#" className="link password-link">Forget your password?</a>
        <p className="signup-text">
          Don’t have an account?
          <Link to="/auth" className="link signup-link"> Sign up</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
