'use client';

import React, { useState, useEffect } from 'react';
import  {useRouter}  from 'next/navigation'; 
import NavbarLanding from '@/components/navbarLanding'
import Profile from '@/components/profile'
import Back from '@/components/backbutton'

const AccountProfile = () => {
  const router = useRouter();
  const [storedFlag, setStoredFlag] = useState('');

  useEffect(() => {
    // Retrieve user information from localStorage
    setStoredFlag(localStorage.getItem('is_logged_in'))
    console.log(localStorage.getItem('is_logged_in'))
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('is_logged_in') !== 'true') {
        router.push('/login');
      }
    }
  }, []);
  
  // Determine if user is logged in
  const isLoggedIn = storedFlag && storedFlag === 'true';
  console.log(storedFlag)
  console.log(isLoggedIn)

  return (
    <>
    {isLoggedIn &&
    <div>
    <NavbarLanding></NavbarLanding>
    <Back></Back>
    <Profile></Profile>
    </div>}
    </>
    
  )
}

export default AccountProfile