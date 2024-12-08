'use client';

import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import NavbarLanding from '@/components/navbarLanding'
import RegistryPortal from '@/components/portals/registry'



const Registry = () => {
  const router = useRouter();
  const [storedRole, setStoredRole] = useState('');
  
  useEffect(() => {
    // Retrieve user information from localStorage
    setStoredRole(localStorage.getItem('role'))
    console.log(localStorage.getItem('role'))

    if (!localStorage.getItem('role') || (localStorage.getItem('role') !== 'admin' && localStorage.getItem('role') !== 'clinician')) {
    router.push('/login');
    }
   
  }, []);
  // Determine if the stored role is 'admin' or 'clinician'
  const isAdminOrClinician = storedRole && (storedRole === 'admin' || storedRole === 'clinician');

  return (
    <>
    {isAdminOrClinician &&
     <div>
     <NavbarLanding />
     <RegistryPortal />
   </div>
 }
    </>
  )
}

export default Registry