'use client';

import React, { useState } from 'react';
import NavbarLanding from '@/components/navbarLanding';
import SidebarFinAsst from '@/components/finAsstSidebar';
import New from '@/components/finAsstNew';
import Done from '@/components/finAsstDone';
import './finAsst.css'



const FinancialAssistancePage = () => {
  const [activeComponent, setActiveComponent] = useState('new');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <NavbarLanding/>
      <div className="title-container">
        <div className='title'>Admin Portal / Financial Assistance</div>
      </div>
      <div className="donations-container">
        <SidebarFinAsst onButtonClick={handleButtonClick} />
        <div className="content">
          {activeComponent === 'new' && <New />}
          {activeComponent === 'done' && <Done />}
        </div>
      </div>
    </div>
  )
}

export default FinancialAssistancePage