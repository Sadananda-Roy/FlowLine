import { Outlet } from "react-router";
import Navbar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
