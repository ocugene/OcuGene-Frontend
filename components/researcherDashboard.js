



//NOTE: nag install ako ng npm install chart.js react-chartjs-2
//NOTE: nag install ako ng npm install chart.js react-chartjs-2
//NOTE: nag install ako ng npm install chart.js react-chartjs-2
//NOTE: nag install ako ng npm install chart.js react-chartjs-2
//NOTE: nag install ako ng npm install chart.js react-chartjs-2

import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './researcherDashboard.css';

  // Mock data array
  let initialData = [
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

  // Custom order of regions
  const regionsOrder = [
    "CAR", "NCR", "Region I", "Region II", "Region III", "Region IV-A", "Region IV-B", 
    "Region V", "Region VI", "Region VII", "Region VIII", "Region IX", 
    "Region X", "Region XI", "Region XII", "Region XIII", "BARMM"
  ];

  const [selectedDisease, setSelectedDisease] = useState({
      name: '',
      totalPatients: 0,
      variants: [],
      regions: {},
  });

  const [diseasesData, setDiseasesData] = useState(initialData);

  useEffect(() => {
    // Fetch both datasets in parallel
    Promise.all([
      fetch('http://localhost:8080/patient/count-per-region').then(response => {
        if (!response.ok) throw new Error('Failed to fetch regions data');
        return response.json();
      }),
      fetch('http://localhost:8080/patient/count-per-variant').then(response => {
        if (!response.ok) throw new Error('Failed to fetch variants data');
        return response.json();
      })
    ])
      .then(([regionsData, variantsData]) => {
        // Step 1: Aggregate regionsData by disease name and region
        const regionCounts = {};
        regionsData.forEach(({ name, count, region }) => {
          if (!regionCounts[name]) {
            regionCounts[name] = { regions: {}, totalPatients: 0 };
          }
          regionCounts[name].regions[region] = (regionCounts[name].regions[region] || 0) + count;
          regionCounts[name].totalPatients += count;
        });

        // Step 2: Prepare variants from variantsData
        const variantsCounts = {};
        variantsData.forEach(({ name, count, variant, duration, age }) => {
          if (!variantsCounts[name]) {
            variantsCounts[name] = [];
          }
          variantsCounts[name].push({ variant, patients: count, duration, age });
        });

        // Step 3: Combine results into the desired format
        const diseasesData = Object.keys(regionCounts).map(name => ({
          name,
          totalPatients: regionCounts[name].totalPatients,
          variants: variantsCounts[name] || [],
          regions: regionCounts[name].regions,
        }));

        setSelectedDisease(diseasesData.find(disease => disease.name === "Cone Rod Dystrophy"));

        // Step 4: Add "All Diseases" entry
        const allPatients = diseasesData.reduce((total, disease) => total + disease.totalPatients, 0);
        const allRegions = {};
        diseasesData.forEach(disease => {
          Object.entries(disease.regions).forEach(([region, count]) => {
            allRegions[region] = (allRegions[region] || 0) + count;
          });
        });

        diseasesData.push({
          name: 'All Diseases',
          totalPatients: allPatients,
          variants: [],
          regions: allRegions,
        });

        // Step 5: Update diseasesData state
        setDiseasesData(diseasesData);

        // setSelectedDisease(variantsCounts['Cone Rod Dystrophy']);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
              checked={disease.name === selectedDisease.name}
            />
            {disease.name}
          </label>
        ))}
      </div>

      {selectedDisease && (
        <div className="diseaseDetails">
          <div className = "diseaseHeader">
            <p className="diseaseName">{selectedDisease.name}</p>
          </div>
          
          <div className="diseaseSpecContainer">
            <p className="left-column">{selectedDisease.totalPatients}</p>
            <p className="right-top">Patients with</p>
            <p className="right-bottom">{selectedDisease.name}</p>
          </div>


          <div className='variantsContainer'>
          {selectedDisease.variants.map((variant, index) => (
            <div key={index} className="variant">
              <h3>{variant.variant}</h3>
              <p>Patients: <b>{variant.patients}</b></p>
              <p>Duration: <b>{variant.duration}</b></p>
              <p>Age: <b>{variant.age}</b></p>
            </div>
          ))}
          </div>
          

          {/* Horizontal Bar Chart for regions */}
          <div className="chartContainer">
            <h2>Regions in the Philippines</h2>
            <Bar
              data={{
                labels: Object.keys(selectedDisease.regions)
                  .sort((a, b) => regionsOrder.indexOf(a) - regionsOrder.indexOf(b)), // Sort according to custom order
                datasets: [
                  {
                    label: 'Number of Patients',
                    data: Object.keys(selectedDisease.regions)
                      .sort((a, b) => regionsOrder.indexOf(a) - regionsOrder.indexOf(b)) // Same sorting order for data
                      .map(region => selectedDisease.regions[region]),
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


          <div className = "clinicOutcomes">
            <h2>Clinical Outcomes</h2>
            <div className='clinicalContainer'>
            {selectedDisease.variants.map((variant, index) => (
              <div key={index} className="variant">
                <h3>{variant.variant}</h3>
                <p>Vision: <b>{variant.vision}</b></p>
                <p>Opacity: <b>{variant.duration}</b></p>
                <p>Retina: <b>{variant.age}</b></p>
              </div>
            ))}
            </div>
          </div>

          {/* Doughnut Chart for Summary */}
          <div className="chartContainer">
            <h2>Summary of Findings</h2>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearcherDashboard;
