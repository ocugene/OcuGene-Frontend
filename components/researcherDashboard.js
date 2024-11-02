'use client';

import React, { useState } from 'react';
import './patientDashboard.css';

const ResearcherDashboard = () => {
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

export default ResearcherDashboard;



// //NOTE: nag install ako ng npm install chart.js react-chartjs-2
// //NOTE: nag install ako ng npm install chart.js react-chartjs-2
// //NOTE: nag install ako ng npm install chart.js react-chartjs-2
// //NOTE: nag install ako ng npm install chart.js react-chartjs-2
// //NOTE: nag install ako ng npm install chart.js react-chartjs-2

// import React, { useState, useEffect } from 'react';
// import { Bar, Doughnut } from 'react-chartjs-2';
// import 'chart.js/auto';
// import './researcherDashboard.css';

//   // Mock data array
//   let initialData = [
//     {
//       name: 'Retinitis Pigmentosa',
//       totalPatients: 1600,
//       variants: [
//         { variant: 'RLBP1', patients: 300, duration: 5, age: 25 },
//         { variant: 'RP1', patients: 400, duration: 3, age: 30 },
//         { variant: 'RHO', patients: 300, duration: 7, age: 35 },
//         { variant: 'RP4', patients: 300, duration: 7, age: 35 },
//         { variant: 'RPE65', patients: 300, duration: 7, age: 35 },
//       ],
//       regions: { Region1: 300, Region2: 200, Region3: 500 },
//     },
//     {
//       name: "Stargardts' Disease",
//       totalPatients: 700,
//       variants: [
//         { variant: 'STGD2', patients: 200, duration: 4, age: 28 },
//         { variant: 'STGD3', patients: 200, duration: 4, age: 28 },
//         { variant: 'STGD4', patients: 300, duration: 6, age: 32 },
//       ],
//       regions: { Region1: 150, Region2: 200, Region3: 150 },
//     },
//     {
//       name: 'Cone-Rod Dystrophy',
//       totalPatients: 750,
//       variants: [
//         { variant: 'CNGA3', patients: 250, duration: 8, age: 26 },
//         { variant: 'ABCA4', patients: 500, duration: 10, age: 29 },
//       ],
//       regions: { Region1: 300, Region2: 250, Region3: 200 },
//     },
//     {
//       name: 'All Diseases',
//       totalPatients: 3050,
//       variants: [],
//       regions: { Region1: 750, Region2: 650, Region3: 850 },
//     },
//   ];

// const ResearcherDashboard = () => {

//   // Custom order of regions
//   const regionsOrder = [
//     "CAR", "NCR", "Region I", "Region II", "Region III", "Region IV-A", "Region IV-B", 
//     "Region V", "Region VI", "Region VII", "Region VIII", "Region IX", 
//     "Region X", "Region XI", "Region XII", "Region XIII", "BARMM"
//   ];


//   const [diseasesData, setDiseasesData] = useState(initialData);

//   useEffect(() => {
//     // Fetch both datasets in parallel
//     Promise.all([
//       fetch('http://localhost:8080/patient/count-per-region').then(response => {
//         if (!response.ok) throw new Error('Failed to fetch regions data');
//         return response.json();
//       }),
//       fetch('http://localhost:8080/patient/count-per-variant').then(response => {
//         if (!response.ok) throw new Error('Failed to fetch variants data');
//         return response.json();
//       })
//     ])
//       .then(([regionsData, variantsData]) => {
//         // Step 1: Aggregate regionsData by disease name and region
//         const regionCounts = {};
//         regionsData.forEach(({ name, count, region }) => {
//           if (!regionCounts[name]) {
//             regionCounts[name] = { regions: {}, totalPatients: 0 };
//           }
//           regionCounts[name].regions[region] = (regionCounts[name].regions[region] || 0) + count;
//           regionCounts[name].totalPatients += count;
//         });

//         // Step 2: Prepare variants from variantsData
//         const variantsCounts = {};
//         variantsData.forEach(({ name, count, variant, duration, age }) => {
//           if (!variantsCounts[name]) {
//             variantsCounts[name] = [];
//           }
//           variantsCounts[name].push({ variant, patients: count, duration, age });
//         });

//         // Step 3: Combine results into the desired format
//         const diseasesData = Object.keys(regionCounts).map(name => ({
//           name,
//           totalPatients: regionCounts[name].totalPatients,
//           variants: variantsCounts[name] || [],
//           regions: regionCounts[name].regions,
//         }));

//         // Step 4: Add "All Diseases" entry
//         const allPatients = diseasesData.reduce((total, disease) => total + disease.totalPatients, 0);
//         const allRegions = {};
//         diseasesData.forEach(disease => {
//           Object.entries(disease.regions).forEach(([region, count]) => {
//             allRegions[region] = (allRegions[region] || 0) + count;
//           });
//         });

//         diseasesData.push({
//           name: 'All Diseases',
//           totalPatients: allPatients,
//           variants: [],
//           regions: allRegions,
//         });

//         // Step 5: Update diseasesData state
//         setDiseasesData(diseasesData);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const [selectedDisease, setSelectedDisease] = useState(null);

//   const handleDiseaseChange = (e) => {
//     const diseaseName = e.target.value;
//     setSelectedDisease(
//       diseasesData.find((disease) => disease.name === diseaseName)
//     );
//   };

//   return (
//     <div className="dashboard">
//       <h1 className="title">Registry Database</h1>

//       {/* Radio buttons for disease selection */}
//       <div className="radioButtons">
//         {diseasesData.map((disease) => (
//           <label key={disease.name} className="radioLabel">
//             <input
//               type="radio"
//               name="disease"
//               value={disease.name}
//               onChange={handleDiseaseChange}
//               className="radioInput"
//             />
//             {disease.name}
//           </label>
//         ))}
//       </div>

//       {selectedDisease && (
//         <div className="diseaseDetails">
//           <h2 className="diseaseName">{selectedDisease.name}</h2>
//           <p>Patients with {selectedDisease.name}: {selectedDisease.totalPatients}</p>

//           <div className='variantsContainer'>
//           {selectedDisease.variants.map((variant, index) => (
//             <div key={index} className="variant">
//               <h3>{variant.variant}</h3>
//               <p>Patients: {variant.patients}</p>
//               <p>Duration: {variant.duration}</p>
//               <p>Age: {variant.age}</p>
//             </div>
//           ))}
//           </div>
          

//           {/* Horizontal Bar Chart for regions */}
//           <div className="chartContainer">
//             <h3>Regions in the Philippines</h3>
//             <Bar
//               data={{
//                 labels: Object.keys(selectedDisease.regions)
//                   .sort((a, b) => regionsOrder.indexOf(a) - regionsOrder.indexOf(b)), // Sort according to custom order
//                 datasets: [
//                   {
//                     label: 'Number of Patients',
//                     data: Object.keys(selectedDisease.regions)
//                       .sort((a, b) => regionsOrder.indexOf(a) - regionsOrder.indexOf(b)) // Same sorting order for data
//                       .map(region => selectedDisease.regions[region]),
//                     backgroundColor: 'rgba(75,192,192,0.4)',
//                   },
//                 ],
//               }}
//               options={{
//                 indexAxis: 'y',
//                 scales: {
//                   x: {
//                     beginAtZero: true,
//                   },
//                 },
//               }}
//             />
//           </div>

//           {/* Doughnut Chart for Summary */}
//           {/* <div className="chartContainer">
//             <h3>Summary of Findings</h3>
//             <Doughnut
//               data={{
//                 labels: ['Vision', 'Opacity', 'Retina'],
//                 datasets: [
//                   {
//                     label: 'Clinical Outcomes',
//                     data: [30, 20, 50],
//                     backgroundColor: [
//                       'rgba(255, 99, 132, 0.6)',
//                       'rgba(54, 162, 235, 0.6)',
//                       'rgba(255, 206, 86, 0.6)',
//                     ],
//                   },
//                 ],
//               }}
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//               }}
//             />
//           </div> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResearcherDashboard;
