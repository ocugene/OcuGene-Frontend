'use client';

import React, { useState,useEffect } from 'react';
import './patientDashboard.css';

const PatientDashboard = () => {

  const [patientsData, setPatientsData] = useState([]);

  useEffect(()=> {

    const fetchPatientsData = async () => {
      const response = await fetch("https://ocugene-backend-1-production.up.railway.app/patient/get-all-projections");
      const responseData = await response.json();
      setPatientsData(responseData);
    };

    fetchPatientsData();

  }, []);

  function downloadCSV() {
    // Step 1: Arrange fields in the specified order
    const modifiedData = patientsData.map(patient => ({
      patientCode: patient.patientCode,
      sex: patient.sex,
      age: patient.age,
      birthday: patient.birthday,
      maritalStatus: patient.maritalStatus,
      region: patient.region,
      province: patient.province,
      city: patient.city,
      barangay: patient.barangay,
      chiefComplaint: patient.chiefComplaint,
      laterality: patient.laterality,
      blurDuration: patient.blurDuration,
      familyMember: patient.familyMember,
      siblingCount: patient.siblingCount,
      ergDate: patient.ergDate,
      ergResult: patient.ergResult,
      diagnosis: patient.diagnosis,
      variant: patient.variant,
      genTestDate: patient.genTestDate,
      rightBcva: patient.rightBcva,
      leftBcva: patient.leftBcva,
      rightRetina: patient.rightRetina,
      leftRetina: patient.leftRetina,
      rightCornea: patient.rightCornea,
      leftCornea: patient.leftCornea
    }));
  
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

  return (
    <div className="p-dashboard">
      <div className="p-info">
        <h1 className="title">Patient Database</h1>
        <div className="p-descript">
          The information about the patients can be found in this page. This database can be
          used for future researches, and can be downloaded.
        </div>
        <div className="p-summary">
          <h2>About the Dataset</h2>
          {/* Add necessary details if applicable */}
          <p>A dataframe with {patientsData.length} observations on the following 25 variables: </p>
          <ul>
            <li>Patient Code</li>
            <li>Sex</li>
            <li>Age</li>
            <li>Birthday</li>

            <li>Marital Status</li>
            <li>Region</li>
            <li>Province</li>
            <li>City</li>
            <li>Barangay</li>

            <li>Chief Complaint</li>
            <li>Laterality</li>
            <li>Blur Duration</li>
            <li>Family Member, </li>
            <li>Sibling Count</li>

            <li>ERG Date</li>
            <li>ERG Result</li>
            <li>Diagnosis</li>
            <li>Variant</li>
            <li>Genetic Testing Date</li>

            <li>Right BCVA</li>
            <li>Left BCVA</li>
            <li>Right Retina</li>
            <li>Left Retina</li>
            <li>Right Cornea</li>
            <li>Left Cornea</li>
          </ul>
          {/* <p>Frequency of Data Types:</p> */}
          <h2>Download the Dataset</h2>
          <p className = "dl-link" onClick={downloadCSV}>Link of the database (downloadable)</p>
        </div>
        <div className="p-table">
          <h2>Preview of the Dataset</h2>
          <div className="p-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Patient Code</th>
                <th>Sex</th>
                <th>Age</th>
                <th>Birthday</th>
                <th>Marital Status</th>

                <th>Region</th>
                <th>Province</th>
                <th>City</th>
                <th>Barangay</th>

                <th>Chief Complaint</th>
                <th>Laterality</th>
                <th>Blur Duration</th>
                <th>Family Member</th>
                <th>Sibling Count</th>

                <th>ERG Date</th>
                <th>ERG Result</th>
                <th>Diagnosis</th>
                <th>Variant</th>
                <th>Genetic Testing Date</th>

                <th>Right BCVA</th>
                <th>Left BCVA</th>
                <th>Right Retina</th>
                <th>Left Retina</th>
                <th>Right Cornea</th>
                <th>Left Cornea</th>
              </tr>
            </thead>
            <tbody>
            {patientsData.map((patient) => (
                <tr key={patient.patientCode}>
                  <td>{patient.patientCode}</td>
                  <td>{patient.sex}</td>
                  <td>{patient.age}</td>
                  <td>{patient.birthday}</td>
                  <td>{patient.maritalStatus}</td>

                  <td>{patient.region}</td>
                  <td>{patient.province}</td>
                  <td>{patient.city}</td>
                  <td>{patient.barangay}</td>
                  
                  <td>{patient.chiefComplaint}</td>
                  <td>{patient.laterality}</td>
                  <td>{patient.blurDuration}</td>
                  <td>{patient.familyMember}</td>
                  <td>{patient.siblingCount}</td>

                  <td>{patient.ergDate}</td>
                  <td>{patient.ergResult}</td>
                  <td>{patient.diagnosis}</td>
                  <td>{patient.variant}</td>
                  <td>{patient.genTestDate}</td>

                  <td>{patient.rightBcva}</td>
                  <td>{patient.rightBcva}</td>
                  <td>{patient.rightRetina}</td>
                  <td>{patient.leftRetina}</td>
                  <td>{patient.rightCornea}</td>
                  <td>{patient.leftCornea}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;