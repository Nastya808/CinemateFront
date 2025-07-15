import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";
import EyeIcon from "../../Components/Icons/EyeIcon";
import { useState } from "react";
import Fields from "../../Components/FormFields/FormField";
import "../../main.css"


interface User {
  email: string;
  password: string;
}

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

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  const onSubmit = (data: LoginData) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find((u) => u.email === data.email && u.password === data.password);

    if (found) {
      setMessage("Login successful!");
      setHasError(false);
      localStorage.setItem("currentUser", JSON.stringify(found));
    } else {
      setHasError(true);
      setMessage("Wrong e-mail or password.");
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
          hasError={!!errors.email || hasError}
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
            hasError={!!errors.password || hasError}
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
