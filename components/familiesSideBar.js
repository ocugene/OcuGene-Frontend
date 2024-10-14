'use client';

import React, { useState } from 'react';
import './FamiliesSideBar.css';

const FamiliesSideBar = ({ onButtonClick }) => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    onButtonClick(buttonName);
  };

  return (
    <div className="sidebar">
      <button
        className={`sidebar-button ${activeButton === 'donate' ? 'active' : ''}`}
        onClick={() => handleButtonClick('donate')}
      >
        Donate to Registry
      </button>
      <button
        className={`sidebar-button ${activeButton === 'support' ? 'active' : ''}`}
        onClick={() => handleButtonClick('support')}
      >
        Support Groups
      </button>
      <button
        className={`sidebar-button ${activeButton === 'financial' ? 'active' : ''}`}
        onClick={() => handleButtonClick('financial')}
      >
        Financial Assistance
      </button>
    </div>
  );
};

export default FamiliesSideBar;