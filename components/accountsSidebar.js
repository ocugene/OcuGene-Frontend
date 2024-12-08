'use client';

import React, { useState } from 'react';
import './accountsSidebar.css';

const AccountsSidebar = ({ onButtonClick }) => {
    const [activeButton, setActiveButton] = useState('newRequests');

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
      onButtonClick(buttonName);
    };

  return (
    <div className="sidebar">
      <button
        className={`sidebar-button ${activeButton === 'newRequests' ? 'active' : ''}`}
        onClick={() => handleButtonClick('newRequests')}
      >
        New Requests
      </button>
      <button
        className={`sidebar-button ${activeButton === 'accepted' ? 'active' : ''}`}
        onClick={() => handleButtonClick('accepted')}
      >
        Accepted
      </button>
      <button
        className={`sidebar-button ${activeButton === 'rejected' ? 'active' : ''}`}
        onClick={() => handleButtonClick('rejected')}
      >
        Rejected
      </button>
    </div>
  )
}

export default AccountsSidebar