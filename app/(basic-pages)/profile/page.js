'use client';

import React, { useState, useEffect } from 'react';
import  {useRouter}  from 'next/navigation'; 
import NavbarLanding from '@/components/navbarLanding'
import Profile from '@/components/profile'

const AccountProfile = () => {
  const router = useRouter();
  const [storedFlag, setStoredFlag] = useState('');

  useEffect(() => {
    // Retrieve user information from localStorage
    setStoredFlag(localStorage.getItem('is_logged_in'))
    console.log(localStorage.getItem('is_logged_in'))

    if (!localStorage.getItem('is_logged_in') || JSON.parse(localStorage.getItem('is_logged_in')) !== 'true') {
      router.push('/login');
    }
  }, []);
  // Determine if user is logged in
  const isLoggedIn = storedFlag && (JSON.parse(storedFlag) === 'true');
  return (
    <>
    {isLoggedIn &&
    <div>
    <NavbarLanding></NavbarLanding>
    <Profile></Profile>
    </div>}
    </>
    
  )
}

export default AccountProfile