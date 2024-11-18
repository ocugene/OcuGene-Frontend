'use client';

import React, { useState, useEffect } from 'react';
import  {useRouter}  from 'next/navigation'; 
import NavbarLanding from '@/components/navbarLanding';
import SidebarSupportAct from '@/components/supportActSidebar';
import Current from '@/components/supportActCurrent';
import AddNew from '@/components/supportActNew';
import './supActs.css'



const SupportActivitiesPage = () => {
  const [activeComponent, setActiveComponent] = useState('current');
  const router = useRouter();
  const [storedRole, setStoredRole] = useState('');
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  useEffect(() => {
    // Retrieve user information from localStorage
    setStoredRole(localStorage.getItem('role'))
    console.log(localStorage.getItem('role'))

    if (!localStorage.getItem('role') || JSON.parse(localStorage.getItem('role')) !== 'admin') {
      router.push('/login');
    }
  }, []);
  // Determine if the stored role is 'admin'
  const isAdmin = storedRole && (JSON.parse(storedRole) === 'admin');

  return (
    <>
      {isAdmin &&
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
      </div>}
    </>
    
  )
}

export default SupportActivitiesPage