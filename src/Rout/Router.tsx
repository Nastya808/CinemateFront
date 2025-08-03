import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Start from "../Pages/Start/Start";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ChooseMethod from "../Components/ChooseMethod/ChooseMethod";
import LoginFacebook from "../Pages/Login/LoginFacebook";
import LoginGoogle from "../Pages/Login/LoginGoogle";
import Preference from "../Pages/Preference/Preference";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Start /> },
      { path: "/auth", element: <ChooseMethod /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/login-facebook", element: <LoginFacebook /> },
      { path: "/login-google", element: <LoginGoogle /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/preference", element: <Preference /> },
      { path: "/news", element: <News /> },
    ],
  },
]);
