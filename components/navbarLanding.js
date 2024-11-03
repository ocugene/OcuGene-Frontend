'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './navbarLanding.css';

const NavbarLanding = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleRHubClick = () => {
    router.push('/researchers-hub');
  };

  const handleRegistryClick = () => {
    router.push('/registry');
  };

  const handleAdminClick = () => {
    router.push('/admin-landing');
  };

  const handleHomeClick = () => {
    router.push('/');
  }

  const handleProfileClick = () => {
    router.push('/Profile');
  }

  const handleRecordClick = () => {
    router.push('/med-record');
  }

  return (
    <div className="navbar">
      <div className="navbar-title">
        <div className="navbar-title-txt">Temporary Navbar</div>
      </div>
      <div className="navbar-btn-container">
        <button className="navbar-btn" onClick={handleHomeClick}>HOME</button>
        <button className="navbar-btn" onClick={handleRHubClick}>RESEARCHER'S HUB</button>
        <button className="navbar-btn" onClick={handleRegistryClick}>REGISTRY</button>
        <button className="navbar-btn" onClick={handleAdminClick}>ADMIN PORTAL</button>
        <button className="navbar-btn" onClick={handleProfileClick}>PROFILE</button>
        <button className="navbar-btn" onClick={handleRecordClick}>MEDICAL RECORD</button>
        <button className="navbar-btn" onClick={handleLoginClick}>LOGIN</button>
      </div>
    </div>
  );
};

export default NavbarLanding;
