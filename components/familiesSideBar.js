'use client';

import React, { useState } from 'react';

import './familiesSideBar.css';

const FamiliesSideBar = ({ onButtonClick }) => {
  const [activeButton, setActiveButton] = useState('inquire');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    onButtonClick(buttonName);
  };

  return (
    <div className="sidebar">
      <button
        className={`sidebar-button ${activeButton === 'inquire' ? 'active' : ''}`}
        onClick={() => handleButtonClick('inquire')}
      >
        Inquire
      </button>
      <button
        className={`sidebar-button ${activeButton === 'activities' ? 'active' : ''}`}
        onClick={() => handleButtonClick('activities')}
      >
        Activities
      </button>
    </div>
  );
};

export default FamiliesSideBar;