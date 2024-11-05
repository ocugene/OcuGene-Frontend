'use client';

import {React, useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import './navbarLanding.css';

const NavbarLanding = () => {
  const router = useRouter();

  const [role, setRole] = useState(localStorage.getItem('role') || '');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('is_logged_in') === 'true');

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleLogoutClick = () => {
    localStorage.setItem('role', '');
    localStorage.setItem('is_logged_in', 'false');
    setRole('');
    setIsLoggedIn(false);
    router.push('/');
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
    router.push('/profile');
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
        
        {
          (role === 'clinician' || role === 'admin' || role === 'researcher') &&
          (
            <>
              <button className="navbar-btn" onClick={handleRHubClick}>RESEARCHER'S HUB</button>
              <button className="navbar-btn" onClick={handleRegistryClick}>REGISTRY</button>
            </>
          )
        }

        {
          (role === 'clinician' || role === 'admin') &&

          <button className="navbar-btn" onClick={handleAdminClick}>ADMIN PORTAL</button>
        }


        {
          !isLoggedIn &&
          <button className="navbar-btn" onClick={handleLoginClick}>LOGIN</button>
        }

        {
          isLoggedIn &&
          <>
            <button className="navbar-btn" onClick={handleProfileClick}>PROFILE</button>
            <button className="navbar-btn" onClick={handleRecordClick}>MEDICAL RECORD</button>
            <button className="navbar-btn" onClick={handleLogoutClick}>LOG OUT</button>
          </>
        }
        
      </div>
    </div>
  );
};

export default NavbarLanding;
