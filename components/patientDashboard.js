'use client';

import React, { useState } from 'react';
import './patientDashboard.css';

const PatientDashboard = () => {
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
          <p>Number of Rows:</p>
          <p>Frequency of Data Types:</p>
          <h2>Download the Dataset</h2>
          <p className = "dl-link">Link of the database (downloadable)</p>
        </div>
        <div className="p-table">
          <h2>Preview of the Dataset</h2>
          <table>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
              <tr>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;