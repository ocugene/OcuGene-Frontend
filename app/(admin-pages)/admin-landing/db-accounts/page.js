'use client';

import React, { useState, useEffect } from 'react';
import  {useRouter}  from 'next/navigation'; 
import NavbarLanding from '@/components/navbarLanding';
import SidebarAccounts from '@/components/accountsSidebar';
import Requests from '@/components/accountRequests'
import Accepted from '@/components/accountRequestAccepted';
import ReJected from '@/components/accountRequestRejected';
import './accounts.css'



const AccountRequests = () => {
  const [activeComponent, setActiveComponent] = useState('newRequests');
  const router = useRouter();
  const [storedRole, setStoredRole] = useState('');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  useEffect(() => {
    // Retrieve user information from localStorage
    setStoredRole(localStorage.getItem('role'))
    console.log(localStorage.getItem('role'))

    if (!localStorage.getItem('role') || localStorage.getItem('role') !== 'admin') {
      router.push('/login');
    }
  }, []);
  // Determine if the stored role is 'admin'
  const isAdmin = storedRole && storedRole === 'admin';
  return (
    <>
    {isAdmin && 
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
    </div>}
    </>
    
  )
}

export default AccountRequests