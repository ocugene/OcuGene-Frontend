'use client';

import React, { useState,useEffect } from 'react';
import './patientDashboard.css';

const PatientDashboard = () => {

  const [patientsData, setPatientsData] = useState([]);

  useEffect(()=> {
    fetchPatientsData();
  }, []);

  const fetchPatientsData = async () => {
    const response = await fetch("http://localhost:8080/patient/get-all");
    const responseData = await response.json();
    console.log(responseData);
    setPatientsData(responseData);
  };

  return (
    <div className="p-dashboard">
      <div className="p-info">
        <h1 className="title">Patient Database</h1>
        <div className="p-descript">
          The information about the patients can be found in this page. This database can be
          used for future researches, and can be downloaded.
        </div>
        <div className="p-summary">
          <h2>Dataset Summary</h2>
          {/* Add necessary details if applicable */}
          <p>Number of Columns:</p>
          <p>Number of Rows:{patientsData.length}</p>
          <p>Frequency of Data Types:</p>
          <h2>Download the Dataset</h2>
          <p className = "dl-link">Link of the database (downloadable)</p>
        </div>
        <div className="p-table">
          <h2>Preview of the Dataset</h2>
          <table>
            <thead>
              <tr>
                <th>Patient Code</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Chief Complaint</th>
                <th>Diagnosis</th>
                <th>Variant</th>
                <th>Genetic Testing Date</th>
              </tr>
            </thead>
            <tbody>
            {patientsData.map((patient) => (
                <tr key={patient.patientID}>
                  <td>{patient.patientCode}</td>
                  <td>{patient.firstName}</td>
                  <td>{patient.middleName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.chiefComplaint}</td>
                  <td>{patient.diagnosis}</td>
                  <td>{patient.variant}</td>
                  <td>{patient.genTestDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;