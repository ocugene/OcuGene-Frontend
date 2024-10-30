'use client';

import React, { useState } from 'react';
import './supportActSidebar.css';

const supportActSidebar = ({ onButtonClick }) => {
    const [activeButton, setActiveButton] = useState('');

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

export default supportActSidebar