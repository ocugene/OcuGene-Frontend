'use client';

import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import NavbarLanding from '@/components/navbarLanding'
import ResearcherHub from '@/components/portals/researcherHub'
import SideNav from '@/components/navbarSide';
import './layout.css';




const AdminLandingPage = () => {
  const router = useRouter();
  const [storedRole, setStoredRole] = useState('');
  
  useEffect(() => {
    // Retrieve user information from localStorage
    setStoredRole(localStorage.getItem('role'))
    console.log(localStorage.getItem('role'))

    if (!localStorage.getItem('role') || (localStorage.getItem('role') !== 'admin' && localStorage.getItem('role') !== 'researcher' && localStorage.getItem('role') !== 'clinician')) {
    router.push('/login');
    }
   
  }, []);
  // Determine if the stored role is 'admin' or 'researcher'
  const isAdminOrResearcher = storedRole && (storedRole === 'admin' || storedRole === 'researcher' || storedRole === 'clinician');

  return (
    <>
    {isAdminOrResearcher &&
    <div>
    <NavbarLanding />
      <div className="row-container">
        <SideNav />
        <div className="landing-container">
          <ResearcherHub />
        </div>
      </div>
    </div>}
    </>
    
  )
}

export default AdminLandingPage