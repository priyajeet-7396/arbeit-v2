import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Navbar/Header';
import Footer from './Footer/Footer';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='page' >
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
