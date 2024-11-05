'use client';

import React, { useState,useEffect } from 'react';
import './patientDashboard.css';

const PatientDashboard = () => {

  const [patientsData, setPatientsData] = useState([]);

  useEffect(()=> {
    fetchPatientsData();
  }, []);

  function downloadCSV() {
    // Step 1: Remove specified fields from each patient object
    const modifiedData = patientsData.map(({ patientID, firstName, middleName, lastName, address, patientCode, ...rest }) =>({patientCode, ...rest}) );
  
    // Step 2: Convert JSON data to CSV format
    const csvContent = generateCSV(modifiedData);
  
    // Step 3: Create a blob and initiate download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'patient_data.csv';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function generateCSV(data) {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row => Object.values(row).join(',')).join('\n');
    return `${headers}\n${rows}`;
  }

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
          <p>Number of Columns: 25</p>
          <p>Number of Rows: {patientsData.length}</p>
          <p>Frequency of Data Types:</p>
          <h2>Download the Dataset</h2>
          <p className = "dl-link" onClick={downloadCSV}>Link of the database (downloadable)</p>
        </div>
        <div className="p-table">
          <h2>Preview of the Dataset</h2>
          <table>
            <thead>
              <tr>
                <th>Patient Code</th>
                <th>Sex</th>
                <th>Age</th>
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
                  <td>{patient.sex}</td>
                  <td>{patient.age}</td>
                  <td>{patient.chiefComplaint}</td>
                  <td>{patient.diagnosis}</td>
                  <td>{patient.variant}</td>
                  <td>{patient.genTestDate.split("T")[0]}</td>
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