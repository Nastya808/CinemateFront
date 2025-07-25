import { Outlet } from "react-router-dom";
import Topbar from "../Components/Shared/Topbar";
import Footage from "../Components/Shared/Footage";
import "./MainLayout.css";


const MainLayout = () => {
  return (
    <div className="app">
      <div className="app-container">
        <Topbar />
        <div className="content">
          <Outlet />
        </div>
        <Footage />
      </div>
    </div>
  );
};



export default MainLayout;
