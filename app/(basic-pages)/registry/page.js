'use client';

import React from 'react'
import Navbar from '@/components/navbarLanding'
import Sidebar from '@/components/registrySideBar'
import Form from '@/components/registryForm'
import './registry.css'


const RegistryPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="regContent">
        <div className='title'>Registry</div>
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