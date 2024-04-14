
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
