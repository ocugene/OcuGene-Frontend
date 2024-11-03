import React, { useState, useEffect } from 'react';
import './registryViewForm.css';

const mockData = [
  {
    patientID: 1,
    first_name: 'John',
    middle_name: 'A.',
    last_name: 'Doe',
    age: 30,
    sex: 'Male',
    region: 'NCR',
    province: 'Metro Manila',
    city: 'Manila',
    barangay: 'Barangay 1',
    diagnosis: 'Retinitis Pigmentosa',
    variant: 'RHO',
    birthday: '1993-05-10',
    marital_status: 'Single',
    address: '123 Street Name, Subdivision',
    chief_complaint: 'Blurred vision',
    laterality: 'Both',
    blur_duration: '6-12 months',
    family_member: 'Father',
    sibling_count: 1,
    erg_date: '2023-08-15',
    erg_result: 'Decreased b wave',
    gen_test_date: '2023-09-12',
    right_bcva: '20/40',
    left_bcva: '20/60',
    right_cornea: 'Normal',
    left_cornea: 'Normal',
    right_retina: 'Abnormal',
    left_retina: 'Abnormal',
  },
  {
    patientID: 2,
    first_name: 'Jane',
    middle_name: 'B.',
    last_name: 'Smith',
    age: 25,
    sex: 'Female',
    region: 'Region IV-A',
    province: 'Cavite',
    city: 'Dasmariñas',
    barangay: 'Barangay 2',
    diagnosis: 'Stargardt Disease',
    variant: 'STGD3',
    birthday: '1998-09-22',
    marital_status: 'Single',
    address: '456 Another St, Subdivision',
    chief_complaint: 'Difficulty seeing at night',
    laterality: 'Left',
    blur_duration: '2 years',
    family_member: 'Mother',
    sibling_count: 2,
    erg_date: '2023-10-05',
    erg_result: 'Decreased a and b wave',
    gen_test_date: '2023-11-01',
    right_bcva: '20/20',
    left_bcva: '20/80',
    right_cornea: 'Normal',
    left_cornea: 'Abnormal',
    right_retina: 'Normal',
    left_retina: 'Abnormal',
  },
];

const RegistryViewForm = () => {
  const [selectedPatientID, setSelectedPatientID] = useState('');
  const [formData, setFormData] = useState({});
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
  
  useEffect(() => {
    if (selectedPatientID) {
      const patientData = patientsData.find(patient => patient.patientID === parseInt(selectedPatientID));
      setFormData(patientData || {});
    }
  }, [selectedPatientID]);

  const handlePatientIDChange = (e) => {
    setSelectedPatientID(e.target.value);
  };

  return (
    <div>
      <div className="form-step">
        <div className='field-container'>
          <label>Select Patient ID:</label>
          <select onChange={handlePatientIDChange} value={selectedPatientID}>
            <option value="">Select a patient</option>
            {patientsData.map((patient) => (
              <option key={patient.patientID} value={patient.patientID}>
                {patient.patientID}
              </option>
            ))}
          </select>
        </div>

        {selectedPatientID && (
          <form>
            {/* Target 1: Demographics */}
            <div id="target1" className="target">
              <label className="regSectionName">Demographics</label>
              <div className="row-container">
                <div className="field-container">
                  <label>Last Name</label>
                  <input type="text" value={formData.lastName || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>First Name</label>
                  <input type="text" value={formData.firstName || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Middle Name</label>
                  <input type="text" value={formData.middleName || ''} readOnly />
                </div>
              </div>
              <div className="row-container">
                <div className="field-container">
                  <label>Birthday</label>
                  <input type="text" value={formData.birthday || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Age</label>
                  <input type="text" value={formData.age || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Sex at Birth</label>
                  <input type="text" value={formData.sex || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Marital Status</label>
                  <input type="text" value={formData.maritalStatus || ''} readOnly />
                </div>
              </div>
              <div className="row-container">
                <div className="field-container">
                  <label>Address</label>
                  <textarea value={formData.address || ''} readOnly />
                </div>
              </div>
              <div className="row-container">
                <div className="field-container">
                  <label>Region</label>
                  <input type="text" value={formData.region || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Province</label>
                  <input type="text" value={formData.province || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>City</label>
                  <input type="text" value={formData.city || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Barangay</label>
                  <input type="text" value={formData.barangay || ''} readOnly />
                </div>
              </div>
            </div>

            {/* Target 2: Clinical History */}
            <div id="target2" className="target">
              <label className="regSectionName">Clinical History</label>
              <div className="row-container">
                <div className="field-container">
                  <label>Chief Complaint</label>
                  <textarea value={formData.chiefComplaint || ''} readOnly />
                </div>
              </div>
              <div className="row-container">
                <div className="field-container">
                  <label>For which eye?</label>
                  <input type="text" value={formData.laterality || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>For how long?</label>
                  <input type="text" value={formData.blurDuration || ''} readOnly />
                </div>
              </div>
            </div>

            {/* Target 3: Family History */}
            <div id="target3" className="target">
              <label className="regSectionName">Family History</label>
              <div className="row-container">
                <div className="field-container">
                  <label>Family Member</label>
                  <input type="text" value={formData.familyMember || ''} readOnly />
                </div>
              </div>
              <div className="row-container">
                <div className="field-container">
                  <label>Siblings with same disease</label>
                  <input type="number" value={formData.siblingCount || 0} readOnly />
                </div>
              </div>
            </div>

            {/* Target 4: Diagnostic */}
            <div id="target4" className="target">
              <label className="regSectionName">Diagnostic</label>
              <div className="row-container">
                <div className="field-container">
                  <label>ERG Date</label>
                  <input type="text" value={formData.ergDate || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>ERG Result</label>
                  <input type="text" value={formData.ergResult || ''} readOnly />
                </div>
              </div>
            </div>

            {/* Target 5: Diagnosis */}
            <div id="target5" className="target">
              <label className="regSectionName">Diagnosis</label>
              <div className="row-container">
                <div className="field-container">
                  <label>Diagnosis</label>
                  <input type="text" value={formData.diagnosis || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Variant</label>
                  <input type="text" value={formData.variant || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Genetic Testing Date</label>
                  <input type="text" value={formData.genTestDate || ''} readOnly />
                </div>
              </div>
            </div>

            {/* Target 6: Clinical Examination */}
            <div id="target6" className="target">
              <label className="regSectionName">Clinical Examination</label>
              <div className="row-container">
                <div className="field-container">
                  <label>Right Eye BCVA</label>
                  <input type="text" value={formData.rightBCVA || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Left Eye BCVA</label>
                  <input type="text" value={formData.leftBCVA || ''} readOnly />
                </div>
              </div>
              <div className="row-container">
                <div className="field-container">
                  <label>Right Eye Cornea</label>
                  <input type="text" value={formData.rightCornea || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Left Eye Cornea</label>
                  <input type="text" value={formData.leftCornea || ''} readOnly />
                </div>
              </div>
              <div className="row-container">
                <div className="field-container">
                  <label>Right Eye Retina</label>
                  <input type="text" value={formData.rightRetina || ''} readOnly />
                </div>
                <div className="field-container">
                  <label>Left Eye Retina</label>
                  <input type="text" value={formData.leftRetina || ''} readOnly />
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistryViewForm;
