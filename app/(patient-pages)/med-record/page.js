'use client';

import React from 'react'
import Navbar from '@/components/navbarLanding'
import Sidebar from '@/components/registrySideBar'
import MedRecord from '@/components/medRecord'
import './medRecord.css'

const MedicalRecord = () => {
  return (
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
    </div>
  )
}

export default MedicalRecord