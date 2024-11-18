'use client';

import React, { useState, useEffect } from 'react';
import  {useRouter}  from 'next/navigation'; 
import NavbarLanding from '@/components/navbarLanding'
import AdminPortal from '@/components/portals/adminPortal'



const AdminLandingPage = () => {
  const router = useRouter();
  const [storedRole, setStoredRole] = useState('');

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
    <NavbarLanding />
    <AdminPortal />
    </div>}
    </>
    
  )
}

export default AdminLandingPage