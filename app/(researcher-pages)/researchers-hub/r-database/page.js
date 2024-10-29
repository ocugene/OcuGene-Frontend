'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbarLanding'
import ResearcherDashboard from '@/components/researcherDashboard'

const ResearchDatabasePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ResearcherDashboard></ResearcherDashboard>
    </div>
  )
}

export default ResearchDatabasePage