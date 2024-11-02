'use client';

import React, { useState } from 'react';

const PatientDashboard = () => {
  return (
    <div className = "p-dashboard">
        <h1 className="title">Patient Database</h1>
        <div className = "p-descript">
            The information about the patients 
        </div>
        <div className = "p-summary">
            <h3>Dataset Summary</h3>
            <p>Number of Columns:</p>
            <p>Number of Rows:</p>
            <p>Frequency of Data Types:</p>
        </div>
    </div>
  )
}

export default PatientDashboard