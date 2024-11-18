'use client';

import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbarLanding'
import ResearcherDashboard from '@/components/researcherDashboard'

const ResearchDatabasePage = () => {
  const router = useRouter();
  const [storedRole, setStoredRole] = useState('');
  
  useEffect(() => {
    // Retrieve user information from localStorage
    setStoredRole(localStorage.getItem('role'))
    console.log(localStorage.getItem('role'))

    if (!localStorage.getItem('role') || (JSON.parse(localStorage.getItem('role')) !== 'admin' && JSON.parse(localStorage.getItem('role')) !== 'researcher' && JSON.parse(localStorage.getItem('role')) !== 'clinician')) {
    router.push('/login');
    }
   
  }, []);
  // Determine if the stored role is 'admin' or 'researcher'
  const isAdminOrResearcher = storedRole && (JSON.parse(storedRole) === 'admin' || JSON.parse(storedRole) === 'researcher' || JSON.parse(storedRole) === 'clinician');

  return (
    <>
    {isAdminOrResearcher &&
    <div>
    <Navbar></Navbar>
    <ResearcherDashboard></ResearcherDashboard>
    </div>}
    </>
    
  )
}

export default ResearchDatabasePage