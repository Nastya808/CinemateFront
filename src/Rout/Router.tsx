import { createBrowserRouter } from 'react-router-dom';
import Index from '../Pages/Index/Index';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import ChooseMethod from '../Components/ChooseMethod/ChooseMethod';
import LoginFacebook from '../Pages/Login/LoginFacebook';
import LoginGoogle from '../Pages/Login/LoginGoogle';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'auth',
        element: <ChooseMethod />
      },
      {
        path: 'login-facebook',
        element: <LoginFacebook />
      },
      {
        path: 'login-google',
        element: <LoginGoogle />
      }      
    ]
  }
]);