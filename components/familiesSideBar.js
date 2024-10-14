'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import './familiesSideBar.css';

const FamiliesSideBar = ({ onButtonClick }) => {
  const searchParams = useSearchParams();
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    // Get the active button from the query parameters
    const activeParam = searchParams.get('active');
    if (activeParam) {
      setActiveButton(activeParam);
      onButtonClick(activeParam);
    }
  }, [searchParams, onButtonClick]);

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
