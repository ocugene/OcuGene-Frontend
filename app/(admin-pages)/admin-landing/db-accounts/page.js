'use client';

import React, { useState } from 'react';
import NavbarLanding from '@/components/navbarLanding';
import SidebarAccounts from '@/components/accountsSidebar';
import Requests from '@/components/accountRequests'
import Accepted from '@/components/accountRequestAccepted';
import ReJected from '@/components/accountRequestRejected';
import './accounts.css'



const AccountRequests = () => {
  const [activeComponent, setActiveComponent] = useState('current');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <NavbarLanding/>
      <div className="title-container">
        <div className='title'>Admin Portal / Account Requests</div>
      </div>
      <div className="accounts-container">
        <SidebarAccounts onButtonClick={handleButtonClick} />
        <div className="content">
          {activeComponent === 'newRequests' && <Requests />}
          {activeComponent === 'accepted' && <Accepted />}
          {activeComponent === 'rejected' && <ReJected />}
        </div>
      </div>
    </div>
  )
}

export default AccountRequests