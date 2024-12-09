'use client';

import React, { useState, useEffect } from 'react';
import  {useRouter}  from 'next/navigation'; 
import NavbarLanding from '@/components/navbarLanding'
import AdminPortal from '@/components/portals/adminPortal'
import SideNav from '@/components/navbarSide';



const AdminLandingPage = () => {
  const router = useRouter();
  const [storedRole, setStoredRole] = useState('');

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
    <NavbarLanding />
      <div className="row-container">
        <SideNav />
        <div className="landing-container">
          <AdminPortal />
        </div>
      </div>
    </div>}
    </>
    
  )
}

export default AdminLandingPage