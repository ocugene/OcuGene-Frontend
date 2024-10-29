//NOTE: nag install ako ng npm install chart.js react-chartjs-2
//NOTE: nag install ako ng npm install chart.js react-chartjs-2
//NOTE: nag install ako ng npm install chart.js react-chartjs-2
//NOTE: nag install ako ng npm install chart.js react-chartjs-2
//NOTE: nag install ako ng npm install chart.js react-chartjs-2

import React, { useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './researcherDashboard.css';

// Mock data array
const diseasesData = [
  {
    name: 'Retinitis Pigmentosa',
    totalPatients: 1600,
    variants: [
      { variant: 'RLBP1', patients: 300, duration: 5, age: 25 },
      { variant: 'RP1', patients: 400, duration: 3, age: 30 },
      { variant: 'RHO', patients: 300, duration: 7, age: 35 },
      { variant: 'RP4', patients: 300, duration: 7, age: 35 },
      { variant: 'RPE65', patients: 300, duration: 7, age: 35 },
    ],
    regions: { Region1: 300, Region2: 200, Region3: 500 },
  },
  {
    name: "Stargardts' Disease",
    totalPatients: 700,
    variants: [
      { variant: 'STGD2', patients: 200, duration: 4, age: 28 },
      { variant: 'STGD3', patients: 200, duration: 4, age: 28 },
      { variant: 'STGD4', patients: 300, duration: 6, age: 32 },
    ],
    regions: { Region1: 150, Region2: 200, Region3: 150 },
  },
  {
    name: 'Cone-Rod Dystrophy',
    totalPatients: 750,
    variants: [
      { variant: 'CNGA3', patients: 250, duration: 8, age: 26 },
      { variant: 'ABCA4', patients: 500, duration: 10, age: 29 },
    ],
    regions: { Region1: 300, Region2: 250, Region3: 200 },
  },
  {
    name: 'All Diseases',
    totalPatients: 3050,
    variants: [],
    regions: { Region1: 750, Region2: 650, Region3: 850 },
  },
];

const ResearcherDashboard = () => {
  const [selectedDisease, setSelectedDisease] = useState(null);

  const handleDiseaseChange = (e) => {
    const diseaseName = e.target.value;
    setSelectedDisease(
      diseasesData.find((disease) => disease.name === diseaseName)
    );
  };

  return (
    <div className="dashboard">
      <h1 className="title">Registry Database</h1>

      {/* Radio buttons for disease selection */}
      <div className="radioButtons">
        {diseasesData.map((disease) => (
          <label key={disease.name} className="radioLabel">
            <input
              type="radio"
              name="disease"
              value={disease.name}
              onChange={handleDiseaseChange}
              className="radioInput"
            />
            {disease.name}
          </label>
        ))}
      </div>

      {selectedDisease && (
        <div className="diseaseDetails">
          <h2 className="diseaseName">{selectedDisease.name}</h2>
          <p>Patients with {selectedDisease.name}: {selectedDisease.totalPatients}</p>

          <div className='variantsContainer'>
          {selectedDisease.variants.map((variant, index) => (
            <div key={index} className="variant">
              <h3>{variant.variant}</h3>
              <p>Patients: {variant.patients}</p>
              <p>Duration: {variant.duration}</p>
              <p>Age: {variant.age}</p>
            </div>
          ))}
          </div>
          

          {/* Horizontal Bar Chart for regions */}
          <div className="chartContainer">
            <h3>Regions in the Philippines</h3>
            <Bar
              data={{
                labels: Object.keys(selectedDisease.regions),
                datasets: [
                  {
                    label: 'Number of Patients',
                    data: Object.values(selectedDisease.regions),
                    backgroundColor: 'rgba(75,192,192,0.4)',
                  },
                ],
              }}
              options={{
                indexAxis: 'y',
                scales: {
                  x: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>

          {/* Doughnut Chart for Summary */}
          {/* <div className="chartContainer">
            <h3>Summary of Findings</h3>
            <Doughnut
              data={{
                labels: ['Vision', 'Opacity', 'Retina'],
                datasets: [
                  {
                    label: 'Clinical Outcomes',
                    data: [30, 20, 50],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                    ],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ResearcherDashboard;
