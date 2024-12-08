'use client';

import React, { useState } from 'react';
import './inquiriesSidebar.css';

const DonationsSidebar = ({ onButtonClick }) => {
    const [activeButton, setActiveButton] = useState('new');

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
      onButtonClick(buttonName);
    };

  return (
    <div className="sidebar">
      <button
        className={`sidebar-button ${activeButton === 'new' ? 'active' : ''}`}
        onClick={() => handleButtonClick('new')}
      >
        New Inquiries
      </button>
      <button
        className={`sidebar-button ${activeButton === 'done' ? 'active' : ''}`}
        onClick={() => handleButtonClick('done')}
      >
        Responded
      </button>
    </div>
  )
}

export default DonationsSidebar