'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbarLanding'
import PatientDashboard from '@/components/patientDashboard'

const PatientDatabasePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PatientDashboard></PatientDashboard>
    </div>
  )
}

export default PatientDatabasePage