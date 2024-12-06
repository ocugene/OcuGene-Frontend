'use client';

import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbarLanding'
import Sidebar from '@/components/registrySideBar'
import MedRecord from '@/components/medRecord'
import './medRecord.css'

const MedicalRecord = () => {
  const router = useRouter();
  const [storedRole, setStoredRole] = useState('');

  useEffect(() => {
    // Retrieve user information from localStorage
    setStoredRole(localStorage.getItem('role'))
    console.log(localStorage.getItem('role'))

    if (!localStorage.getItem('role') || (localStorage.getItem('role') !== 'admin' && localStorage.getItem('role') !== 'patient')) {
    router.push('/login');
    }
   
  }, []);
  // Determine if the stored role is 'admin' or 'patient'
  const isAdminOrPatient = storedRole && (storedRole === 'admin' || storedRole === 'patient');
  return (
    <>
    {isAdminOrPatient &&
     <div>
     <Navbar></Navbar>
     <div className="regContent">
       <div className='title'>Medical Record</div>
       <div  className="form-container">
         <div className='sidebar'>
           <Sidebar></Sidebar>
         </div>
         <div className='form'>
           <MedRecord></MedRecord>
         </div>
       </div>
     </div>
    </div>}
    </>
   
  )
}

export default MedicalRecord