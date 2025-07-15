import { Link, Outlet } from 'react-router-dom';

const Index = () => {
  return (
    <>
          <Link to="/auth" className="link signup-link"> Sign up</Link>

      <Outlet />
    </>
  );
};

export default Index;
