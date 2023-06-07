import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
  return (
    <div className='lg:mx-16'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;