import React from 'react'
import { Outlet } from 'react-router-dom'
import ArrowTop from '../components/ArrowTop';
import Header from '../components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <ArrowTop />
      <Outlet />
    </>
  );
}

export default Layout