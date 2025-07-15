import { Link, Outlet } from 'react-router-dom';
import EmailIcon from '../../Components/Icons/EmailIcon';

const Index = () => {
  return (
    <>
            <Link to="/register">
        <button className="social-button email">
          <EmailIcon />
          Continue with E-mail
        </button>
      </Link>
      <Outlet />
    </>
  );
};

export default Index;
