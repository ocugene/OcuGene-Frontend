'use client';

import React from 'react'
import Navbar from '@/components/navbarLanding'
import Sidebar from '@/components/registrySideBar'
import Form from '@/components/registryNewForm'
import './new-record.css'


const RegistryPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="regContent">
        <div className='title'>New Record</div>
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