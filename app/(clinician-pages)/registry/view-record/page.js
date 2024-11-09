'use client';

import {React, useState, useEffect} from 'react'
import Navbar from '@/components/navbarLanding'
import Sidebar from '@/components/registrySideBar'
import Form from '@/components/registryViewForm'
import { useRouter } from 'next/navigation';
import './view-record.css'


const RegistryPage = () => {

  const router = useRouter();

  const handleGoBack = () => {
    localStorage.setItem('view_patientCode', '');
    router.push('/registry/patient-list');
  }


  return (
    <div>
      <Navbar></Navbar> 
      <div className="regContent">
        <div className='button-container'>
          <button className='back-button' onClick={handleGoBack}>
            ← Go Back
          </button>
        </div>
        
        <div className='title'>View Record</div>
        <div  className="view-record-form-container">
          <div className='sidebar'> <Sidebar></Sidebar> </div>
          <div className='view-record-form'> <Form></Form> </div>
        </div>
      </div>
    </div>
  )
}

export default RegistryPage