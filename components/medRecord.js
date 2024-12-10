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
  
  const [patientCode, setPatientCode] = useState('');
  const [formData, setFormData] = useState(
    {
      patientID: 0,
      first_name: '',
      middle_name: '',
      last_name: '',
      age: 0,
      sex: '',
      region: '',
      province: '',
      city: '',
      barangay: '',
      diagnosis: '',
      variant: '',
      birthday: '',
      marital_status: '',
      address: '',
      chief_complaint: '',
      laterality: '',
      blur_duration: '',
      family_member: '',
      sibling_count: 0,
      erg_date: '',
      erg_result: '',
      gen_test_date: '2',
      right_bcva: '',
      left_bcva: '',
      right_cornea: '',
      left_cornea: '',
      right_retina: '',
      left_retina: '',
    }
  );

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      // Safe to use localStorage in the browser
      setPatientCode(localStorage.getItem('username'));
    }
  }, []);

  useEffect(() => {

    const fetchPatientMedicalRecord = async () => {
      try {
        const response = await fetch(`https://ocugene-backend-production.up.railway.app/patient/get-by-patient-code?patientCode=${patientCode}`);
        const data = await response.json();
        setFormData(
          {
            patientID: data.patientID,
            first_name: data.firstName,
            middle_name: data.middleName,
            last_name: data.lastName,
            age: data.age,
            sex: data.sex,
            region: data.region,
            province: data.province,
            city: data.city,
            barangay: data.barangay,
            diagnosis: data.diagnosis,
            variant: data.variant,
            birthday: data.birthday.split('T')[0], // Extract date part only
            marital_status: data.maritalStatus,
            address: data.address,
            chief_complaint: data.chiefComplaint,
            laterality: data.laterality,
            blur_duration: data.blurDuration,
            family_member: data.familyMember,
            sibling_count: data.siblingCount,
            erg_date: data.ergDate.split('T')[0], // Extract date part only
            erg_result: data.ergResult,
            gen_test_date: data.genTestDate.split('T')[0], // Extract date part only
            patient_code: data.patientCode,
            right_bcva: data.rightBcva,
            left_bcva: data.leftBcva,
            right_cornea: data.rightCornea,
            left_cornea: data.leftCornea,
            right_retina: data.rightRetina,
            left_retina: data.leftRetina
          }
        )
      } catch (error) {
        console.log("Error fetching patient medical record: ", error);
      }

    }

    if(patientCode){
      fetchPatientMedicalRecord();
    }

  }, [patientCode]);


  return (
    <div>
      <div className="form-step">
        <div className='field-container'>
          {/* <label>Select Patient ID:</label>
          <select onChange={handlePatientIDChange} value={selectedPatientID}>
            <option value="">Select a patient</option>
            {mockData.map((patient) => (
              <option key={patient.patientID} value={patient.patientID}>
                {patient.patientID}
              </option>
            ))}
          </select> */}
        </div>

        <form>
          {/* Target 1: Demographics */}
          <div id="target1" className="target">
            <label className="regSectionName">Demographics</label>
            <div className="row-container">
              <div className="field-container">
                <label>Last Name</label>
                <input type="text" value={formData.last_name || ''} readOnly />
              </div>
              <div className="field-container">
                <label>First Name</label>
                <input type="text" value={formData.first_name || ''} readOnly />
              </div>
              <div className="field-container">
                <label>Middle Name</label>
                <input type="text" value={formData.middle_name || ''} readOnly />
              </div>
            </div>
            <div className="row-container">
              <div className="field-container">
                <label>Birthday</label>
                <input type="date" value={formData.birthday || ''} readOnly />
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
                <input type="text" value={formData.marital_status || ''} readOnly />
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
                <textarea value={formData.chief_complaint || ''} readOnly />
              </div>
            </div>
            <div className="row-container">
              <div className="field-container">
                <label>For which eye?</label>
                <input type="text" value={formData.laterality || ''} readOnly />
              </div>
              <div className="field-container">
                <label>For how long?</label>
                <input type="text" value={formData.blur_duration || ''} readOnly />
              </div>
            </div>
          </div>

          {/* Target 3: Family History */}
          <div id="target3" className="target">
            <label className="regSectionName">Family History</label>
            <div className="row-container">
              <div className="field-container">
                <label>Family Member</label>
                <input type="text" value={formData.family_member || ''} readOnly />
              </div>
            </div>
            <div className="row-container">
              <div className="field-container">
                <label>Siblings with same disease</label>
                <input type="number" value={formData.sibling_count || 0} readOnly />
              </div>
            </div>
          </div>

          {/* Target 4: Diagnostic */}
          <div id="target4" className="target">
            <label className="regSectionName">Diagnostic</label>
            <div className="row-container">
              <div className="field-container">
                <label>ERG Date</label>
                <input type="date" value={formData.erg_date || ''} readOnly />
              </div>
              <div className="field-container">
                <label>ERG Result</label>
                <input type="text" value={formData.erg_result || ''} readOnly />
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
                <input type="date" value={formData.gen_test_date || ''} readOnly />
              </div>
            </div>
          </div>

          {/* Target 6: Clinical Examination */}
          <div id="target6" className="target">
            <label className="regSectionName">Clinical Examination</label>
            <div className="row-container">
              <div className="field-container">
                <label>Right Eye BCVA</label>
                <input type="text" value={formData.right_bcva || ''} readOnly />
              </div>
              <div className="field-container">
                <label>Left Eye BCVA</label>
                <input type="text" value={formData.left_bcva || ''} readOnly />
              </div>
            </div>
            <div className="row-container">
              <div className="field-container">
                <label>Right Eye Cornea</label>
                <input type="text" value={formData.right_cornea || ''} readOnly />
              </div>
              <div className="field-container">
                <label>Left Eye Cornea</label>
                <input type="text" value={formData.left_cornea || ''} readOnly />
              </div>
            </div>
            <div className="row-container">
              <div className="field-container">
                <label>Right Eye Retina</label>
                <input type="text" value={formData.right_retina || ''} readOnly />
              </div>
              <div className="field-container">
                <label>Left Eye Retina</label>
                <input type="text" value={formData.left_retina || ''} readOnly />
              </div>
            </div>
          </div>
        </form>

        {/* {selectedPatientID && (
          
        )} */}
      </div>
    </div>
  );
};

export default RegistryViewForm;
