'use client';

import React, { useState } from 'react';
import NavbarLanding from '@/components/navbarLanding';
import SidebarFamilies from '@/components/familiesSideBar';
import Inquire from '@/components/familiesInquire';
import Activities from '@/components/familiesActivities';
import './families.css';
import Back from '@/components/backbutton'

const FamiliesPage = () => {
  const [activeComponent, setActiveComponent] = useState('inquire');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <NavbarLanding />
      <Back></Back>
      <div className="title-container">
        <div className='title'>Home / Families</div>
      </div>
      <div className="families-container">
        <SidebarFamilies onButtonClick={handleButtonClick} />
        <div className="content">
          {activeComponent === 'inquire' && <Inquire />}
          {activeComponent === 'activities' && <Activities />}
        </div>
      </div>
    </div>
  );
};

export default FamiliesPage;