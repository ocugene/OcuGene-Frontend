'use client';

import {React, useState, useEffect} from 'react'
import Navbar from '@/components/navbarLanding'
import Sidebar from '@/components/registrySideBar'
import Form from '@/components/registryViewForm'
import { useRouter } from 'next/navigation';
import './view-record.css'
import Back from '@/components/backbutton'


const RegistryPage = () => {

  const router = useRouter();
  const [storedRole, setStoredRole] = useState('');
  const handleGoBack = () => {
    localStorage.setItem('view_patientCode', '');
    router.push('/registry/patient-list');
  }

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
    <Navbar></Navbar> 
    <Back></Back>
    <div className="regContent">
      <div className='button-container'>
        {/* <button className='back-button' onClick={handleGoBack}>
          ← Go Back
        </button> */}
      </div>
      
      <div className='title-addnew'>View Record</div>
      <div  className="view-record-form-container">
        <div className='sidebar'> <Sidebar></Sidebar> </div>
        <div className='view-record-form'> <Form></Form> </div>
      </div>
    </div>
    </div>} 
    </>
    
  )
}

export default RegistryPage