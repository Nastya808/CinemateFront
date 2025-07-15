export type Language = 'en' | 'ru';

export const translations = {
  en: {
    registration: {
      title: "Create an account",
      email: "E-mail",
      emailPlaceholder: "Enter your email",
      emailRequired: "Email is required",
      emailInvalid: "Invalid email format",

      password: "Password",
      passwordPlaceholder: "Enter your password",
      passwordRequired: "Password is required",
      passwordMinLength: "Password must be at least 6 characters",

      repeatPassword: "Repeat Password",
      repeatPasswordPlaceholder: "Repeat your password",
      repeatPasswordRequired: "Please repeat your password",
      passwordsDoNotMatch: "Passwords do not match",

      submit: "Sign up",
      alreadyHaveAccount: "Already have an account?",
      login: "Log in"
    }
  },

  ru: {
    registration: {
      title: "Создайте аккаунт",
      email: "Электронная почта",
      emailPlaceholder: "Введите электронную почту",
      emailRequired: "Электронная почта обязательна",
      emailInvalid: "Неверный формат почты",

      password: "Пароль",
      passwordPlaceholder: "Введите пароль",
      passwordRequired: "Пароль обязателен",
      passwordMinLength: "Пароль должен быть не менее 6 символов",

      repeatPassword: "Повторите пароль",
      repeatPasswordPlaceholder: "Повторите пароль",
      repeatPasswordRequired: "Пожалуйста, повторите пароль",
      passwordsDoNotMatch: "Пароли не совпадают",

      submit: "Зарегистрироваться",
      alreadyHaveAccount: "Уже есть аккаунт?",
      login: "Войти"
    }
  }
};
