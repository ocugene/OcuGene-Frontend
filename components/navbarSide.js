'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './navbarSide.css';

const NavbarSide = () => {
  const router = useRouter();
  const role = localStorage.getItem('role'); // Assuming role is stored in localStorage
  const [activeButton, setActiveButton] = useState('HOME');

  const handleButtonClick = (path, buttonName) => {
    setActiveButton(buttonName);
    router.push(path);
  };

  return (
    <div className="sidebar">
      <button
        className={`sidebar-btn ${activeButton === 'HOME' ? 'active' : ''}`}
        onClick={() => handleButtonClick('/home', 'HOME')}
      >
        HOME
      </button>
      <ul className="sub-menu">
        <li>
          <button
            className={`sub-btn ${activeButton === 'FAMILIES' ? 'active' : ''}`}
            onClick={() => handleButtonClick('/families', 'FAMILIES')}
          >
            Families
          </button>
        </li>
      </ul>
      {(role === 'admin' || role === 'researcher') && (
        <>
          <button
            className={`sidebar-btn ${activeButton === 'RESEARCHER_HUB' ? 'active' : ''}`}
            onClick={() => handleButtonClick('/researchers-hub', 'RESEARCHER_HUB')}
          >
            RESEARCHER&apos;S HUB
          </button>
          <ul className="sub-menu">
            <li>
              <button
                className={`sub-btn ${activeButton === 'R_DATABASE' ? 'active' : ''}`}
                onClick={() => handleButtonClick('/researchers-hub/r-database', 'R_DATABASE')}
              >
                Registry Database
              </button>
            </li>
            <li>
              <button
                className={`sub-btn ${activeButton === 'P_DATABASE' ? 'active' : ''}`}
                onClick={() => handleButtonClick('/researchers-hub/p-database', 'P_DATABASE')}
              >
                Patient Database
              </button>
            </li>
          </ul>
        </>
      )}
      {(role === 'clinician' || role === 'admin') && (
        <>
          <button
            className={`sidebar-btn ${activeButton === 'REGISTRY' ? 'active' : ''}`}
            onClick={() => handleButtonClick('/registry', 'REGISTRY')}
          >
            REGISTRY
          </button>
          <ul className="sub-menu">
            <li>
              <button
                className={`sub-btn ${activeButton === 'NEW_RECORD' ? 'active' : ''}`}
                onClick={() => handleButtonClick('/registry/new-record', 'NEW_RECORD')}
              >
                Add New Record
              </button>
            </li>
            <li>
              <button
                className={`sub-btn ${activeButton === 'PATIENT_LIST' ? 'active' : ''}`}
                onClick={() => handleButtonClick('/registry/patient-list', 'PATIENT_LIST')}
              >
                View Existing Record
              </button>
            </li>
          </ul>
        </>
      )}
      {role === 'admin' && (
        <>
          <button
            className={`sidebar-btn ${activeButton === 'ADMIN_PORTAL' ? 'active' : ''}`}
            onClick={() => handleButtonClick('/admin-landing', 'ADMIN_PORTAL')}
          >
            ADMIN PORTAL
          </button>
          <ul className="sub-menu">
            <li>
              <button
                className={`sub-btn ${activeButton === 'DB_INQUIRIES' ? 'active' : ''}`}
                onClick={() => handleButtonClick('/admin-landing/db-inquiries', 'DB_INQUIRIES')}
              >
                Manage Inquiries
              </button>
            </li>
            <li>
              <button
                className={`sub-btn ${activeButton === 'DB_ACCOUNTS' ? 'active' : ''}`}
                onClick={() => handleButtonClick('/admin-landing/db-accounts', 'DB_ACCOUNTS')}
              >
                Account Requests
              </button>
            </li>
            <li>
              <button
                className={`sub-btn ${activeButton === 'SUPPORT_ACTIVITIES' ? 'active' : ''}`}
                onClick={() => handleButtonClick('/admin-landing/db-support-acts', 'SUPPORT_ACTIVITIES')}
              >
                Support Activities
              </button>
            </li>
          </ul>
        </>
      )}
      <button
        className={`sidebar-btn ${activeButton === 'PROFILE' ? 'active' : ''}`}
        onClick={() => handleButtonClick('/profile', 'PROFILE')}
      >
        PROFILE
      </button>
    </div>
  );
};

export default NavbarSide;