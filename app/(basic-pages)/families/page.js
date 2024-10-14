'use client';

import React, { useState } from 'react';
import NavbarLanding from '@/components/navbarLanding';
import SidebarFamilies from '@/components/familiesSideBar';
import Donate from '@/components/familiesDonate';
import Support from '@/components/familiesSupGrp';
import Financial from '@/components/familiesFinAsst';
import './families.css';

const FamiliesPage = () => {
  const [activeComponent, setActiveComponent] = useState('');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <NavbarLanding />
      <div className="families-container">
        <SidebarFamilies onButtonClick={handleButtonClick} />
        <div className="content">
          {activeComponent === 'donate' && <Donate />}
          {activeComponent === 'support' && <Support />}
          {activeComponent === 'financial' && <Financial />}
        </div>
      </div>
    </div>
  );
};

export default FamiliesPage;