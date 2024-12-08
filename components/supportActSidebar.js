'use client';

import React, { useState } from 'react';
import './supportActSidebar.css';

const SupportActSidebar = ({ onButtonClick }) => {
    const [activeButton, setActiveButton] = useState('current');

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
      onButtonClick(buttonName);
    };

  return (
    <div className="sidebar">
      <button
        className={`sidebar-button ${activeButton === 'current' ? 'active' : ''}`}
        onClick={() => handleButtonClick('current')}
      >
        Current Activities
      </button>
      <button
        className={`sidebar-button ${activeButton === 'addNew' ? 'active' : ''}`}
        onClick={() => handleButtonClick('addNew')}
      >
        Add New Activity
      </button>
    </div>
  )
}

export default SupportActSidebar