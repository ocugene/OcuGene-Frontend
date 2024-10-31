'use client';

import React, { useState } from 'react';
import NavbarLanding from '@/components/navbarLanding';
import SidebarSupportAct from '@/components/supportActSidebar';
import Current from '@/components/supportActCurrent';
import AddNew from '@/components/supportActNew';
import './supActs.css'



const SupportActivitiesPage = () => {
  const [activeComponent, setActiveComponent] = useState('current');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <NavbarLanding/>
      <div className="title-container">
        <div className='title'>Admin Portal / Support Activities</div>
      </div>
      <div className="supActs-container">
        <SidebarSupportAct onButtonClick={handleButtonClick} />
        <div className="content">
          {activeComponent === 'current' && <Current />}
          {activeComponent === 'addNew' && <AddNew />}
        </div>
      </div>
    </div>
  )
}

export default SupportActivitiesPage