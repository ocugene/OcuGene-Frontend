'use client';

import React, { useState } from 'react';
import NavbarLanding from '@/components/navbarLanding';
import SidebarDonations from '@/components/donationsSidebar';
import New from '@/components/donationsNew';
import Done from '@/components/donationsDone';
import './donations.css'



const SupportActivitiesPage = () => {
  const [activeComponent, setActiveComponent] = useState('new');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <NavbarLanding/>
      <div className="title-container">
        <div className='title'>Admin Portal / Registry Donations</div>
      </div>
      <div className="donations-container">
        <SidebarDonations onButtonClick={handleButtonClick} />
        <div className="content">
          {activeComponent === 'new' && <New />}
          {activeComponent === 'done' && <Done />}
        </div>
      </div>
    </div>
  )
}

export default SupportActivitiesPage