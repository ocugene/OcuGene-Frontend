'use client';

import React from 'react'
import Navbar from '@/components/navbarLanding'
import Sidebar from '@/components/registrySideBar'
import Form from '@/components/registryViewForm'
import './view-record.css'


const RegistryPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="regContent">
        <div className='title'>View Record</div>
        <div  className="form-container">
          <div className='sidebar'>
            <Sidebar></Sidebar>
          </div>
          <div className='form'>
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistryPage