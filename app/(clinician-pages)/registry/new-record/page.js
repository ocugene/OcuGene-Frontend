'use client';

import {React, useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbarLanding';
import Sidebar from '@/components/registrySideBar';
import Form from '@/components/registryNewForm';
import './new-record.css';
import ConsentForm from '@/components/consentFormModal';


const RegistryPage = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    age: '',
    sex: '',
    birthday: '',
    address: '',
    region: '',
    province:'',
    city: '',
    barangay: '',
    contact_number: '',
    marital_status: '',
    chief_complaint: '',
    blur_duration: '',
    laterality: '',
    family_member: '',
    sibling_count: 0,
    erg_date: '',
    erg_result: '',
    diagnosis: '',
    variant: '',
    gen_test_date: '',
    right_bcva: '',
    left_bcva: '',
    right_cornea: '',
    left_cornea: '',
    right_retina: '',
    left_retina: ''
  });

  useEffect(() => {
    // Make a GET request to the server
    fetch('http://localhost:8080/patient/getLatestID', {
      method: 'GET',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);

      let id = data;
      let next_id = data + 1;

      next_id = next_id.toString().padStart(4, '0')
      const patientCode = `2024${next_id}`;

      // Update the form data to include the patient code
      setFormData(prevFormData => ({
        ...prevFormData,
        patient_code: patientCode,
      }));
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });
  }, []);

  const [isConsentFormShown, setIsConsentFormShown] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/patient/register', {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      router.push("/");
    } catch (error) {
      console.log("Error in patient registration: ", error);
    }
    
  };

  const openConsentForm = (e) => {
    e.preventDefault();
    console.log((formData.first_name + formData.middle_name + formData.last_name).toUpperCase());
    setIsConsentFormShown(true)
  }

  const handleClose = () => {
    setIsConsentFormShown(false);
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className="regContent">
        <div className='title'>New Record</div>
        <div  className="form-container">
          <div className='sidebar'>
            <Sidebar></Sidebar>
          </div>
          <div className='form'>
            <Form formData={formData} setFormData={setFormData} handleSubmit={openConsentForm}></Form>
          </div>
        </div>
      </div>
      {
        isConsentFormShown &&
        <ConsentForm onClose={handleClose} formData={formData} handleSubmit={handleSubmit}></ConsentForm>
      }
    </div>
  )
}

export default RegistryPage