'use client';

import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import NavbarLanding from '@/components/navbarLanding'
import SideNav from '@/components/navbarSide';
import RegistryPortal from '@/components/portals/registry'
// import './layout.css';



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
     <div className="row-container">
         <SideNav />
         <div className="landing-container">
           <RegistryPortal />
         </div>
       </div>
     </div>
 }
    </>
  )
}

export default Registry