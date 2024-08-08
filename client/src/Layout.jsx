import React from 'react'
import { Outlet } from 'react-router-dom';
import BackToTopButton from './BackToTop/BackToTop';

const Layout = () => {
  return (
    <>
      <Outlet />
      <BackToTopButton />
    </>
  );
};
export default Layout;