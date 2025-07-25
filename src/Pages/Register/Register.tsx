import { useForm } from "react-hook-form";
import "./Register.css";
import { register as registerUser } from "../../Services/authService";
import Fields from "../../Components/FormFields/FormField";
import { Link } from "react-router-dom";
import EyeIcon from "../../Components/Icons/EyeIcon";
import { useState } from "react";
import { useLang } from "../../Hooks/useLang";

type FormData = {
  email: string;
  password: string;
  repeatPassword: string;
};

const Register = () => {
  const { t, switchLang, language } = useLang();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: ""
    }
  });

  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const onSubmit = async (data: FormData) => {
    const result = await registerUser(data.email, data.password);
    setMessage(result.message);
    setHasError(!result.success);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-page">
      <h1 className="logo">Cinemate</h1>

      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <button type="button" onClick={() => switchLang(language === "en" ? "ru" : "en")} className="lang-toggle">
          {language === "en" ? "Русский" : "English"}
        </button>
      </div>

      <h2 className="title">{t.registration.title}</h2>

      {message && (
        <p className={hasError ? "error-message-top" : "message"}>{message}</p>
      )}

      {/* Email */}
      <div className="form-group">
        <label className="input-label">{t.registration.email}</label>
        <Fields
          placeholder={t.registration.emailPlaceholder}
          type="email"
          registerFormHook={register("email", {
            required: t.registration.emailRequired,
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: t.registration.emailInvalid
            }
          })}
          hasError={!!errors.email}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div className="form-group">
        <label className="input-label">{t.registration.password}</label>
        <div className="password-wrapper">
          <Fields
            placeholder={t.registration.passwordPlaceholder}
            type={showPassword ? "text" : "password"}
            registerFormHook={register("password", {
              required: t.registration.passwordRequired,
              minLength: {
                value: 6,
                message: t.registration.passwordMinLength
              }
            })}
            hasError={!!errors.password}
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            <EyeIcon isVisible={showPassword} />
          </span>
        </div>
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      {/* Repeat Password */}
      <div className="form-group">
        <label className="input-label">{t.registration.repeatPassword}</label>
        <div className="password-wrapper">
          <Fields
            placeholder={t.registration.repeatPasswordPlaceholder}
            type={showRepeatPassword ? "text" : "password"}
            registerFormHook={register("repeatPassword", {
              required: t.registration.repeatPasswordRequired,
              validate: (value) =>
                value === watch("password") || t.registration.passwordsDoNotMatch
            })}
            hasError={!!errors.repeatPassword}
          />
          <span className="eye-icon" onClick={() => setShowRepeatPassword(!showRepeatPassword)}>
            <EyeIcon isVisible={showRepeatPassword} />
          </span>
        </div>
        {errors.repeatPassword && <p className="error">{errors.repeatPassword.message}</p>}
      </div>

      <button type="submit" className="submit-button">{t.registration.submit}</button>

      <p className="footer-text">
        {t.registration.alreadyHaveAccount}{" "}
        <Link to="/login" className="link">{t.registration.login}</Link>
      </p>
    </form>
  );
};

export default Register;
