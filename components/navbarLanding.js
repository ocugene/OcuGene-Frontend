'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './navbarLanding.css';

const NavbarLanding = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleHomeClick = () => {
    router.push('/');
  }

  return (
    <div className="navbar">
      <div className="navbar-title">
        <div className="navbar-title-txt">OcuGene</div>
      </div>
      <div className="navbar-btn-container">
        <button className="navbar-btn" onClick={handleHomeClick}>HOME</button>
        <button className="navbar-btn" onClick={handleLoginClick}>LOGIN</button>
      </div>
    </div>
  );
};

export default NavbarLanding;
