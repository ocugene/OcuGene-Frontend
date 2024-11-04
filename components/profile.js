import {React, useState, useEffect} from 'react'
import './profile.css';
const profile = () => {

  const accountType = localStorage.getItem('role');

  const [formData, setFormData] = useState(
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
    }
  );

  useEffect(() => {

    const patientCode = localStorage.getItem('username');

    fetch(`http://localhost:8080/patient/get-by-patient-code?patientCode=${patientCode}`, {
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
          right_bcva: data.rightBCVA,
          left_bcva: data.leftBCVA,
          right_cornea: data.rightCornea,
          left_cornea: data.leftCornea,
          right_retina: data.rightRetina,
          left_retina: data.leftRetina
        }
      );

    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });
  }, []);

  return (
    // LAGYAN NIYO NG IF PATIENT AND IF NOT PATIENT

    // PATIENT PROFILE
    // <div className="profile-page">
    //   <div className="title">Profile</div>
    //   <div className="personalContainer">
    //       <h2>Personal Information</h2>
    //       <div className="personal-info">
    //         <div className="namesColumn">
    //           <p className="info-title">Last Name</p>
    //           <p className="info-personal">*insert last name*</p>
    //           <p className="info-title">First Name</p>
    //           <p className="info-personal">*insert first name*</p>
    //         </div>
    //         <div className="contactColumn">
    //           <p className="info-title">Contact Number</p>
    //           <p className="info-personal">*insert last name*</p>
    //         </div>
    //       </div>
    //   </div>
    //   <div className="accountContainer">
    //       <h2>Account Information</h2>
    //       <div className="personal-info">
    //         <div className="namesColumn">
    //           <p className="info-title">User ID</p>
    //           <p className="info-personal">*insert User ID*</p>
    //           <p className="info-title">Password</p>
    //           <div className="pw">
    //             <p className="info-personal">*insert password*</p>
    //             <button className="change-pw">Change Password</button>
    //           </div>
    //           <p className="info-title">Account Type</p>
    //           <p className="info-personal">*insert acct type*</p>
    //         </div>
    //         <div className="contactColumn">
    //           {/* <p className="info-title">Contact Number</p>
    //           <p className="info-personal">*insert last name*</p> */}
    //         </div>
    //       </div>
    //   </div>
    //   <button className="save-btn">SAVE</button>
    // </div>

    // NON PATIENT PROFILE
    <div className="profile-page">
      <div className="title">Profile</div>
      <div className="personalContainer">
          <h2>Personal Information</h2>
          <div className="personal-info">
            <div className="namesColumn">
              <p className="info-title">Last Name</p>
              <p className="info-personal">{formData.last_name}</p>
              <p className="info-title">First Name</p>
              <p className="info-personal">{formData.first_name }</p>
            </div>
            <div className="contactColumn">
              <p className="info-title">Contact Number</p>
              <p className="info-personal">*insert last name*</p>
            </div>
          </div>
      </div>
      <div className="accountContainer">
          <h2>Account Information</h2>
          <div className="personal-info">
            <div className="namesColumn">
              <p className="info-title">User ID</p>
              <p className="info-personal">{formData.patient_code}</p>
              <p className="info-title">Email</p>
              <p className="info-personal">*insert email*</p>
              <p className="info-title">Password</p>
              <div className="pw">
                <p className="info-personal">{"*".repeat(formData.first_name.length + formData.last_name.length)}</p>
                <button className="change-pw">Change Password</button>
              </div>
              <p className="info-title">Account Type</p>
              <p className="info-personal">{accountType.toUpperCase()}</p>
            </div>
            <div className="contactColumn">
              {/* <p className="info-title">Contact Number</p>
              <p className="info-personal">*insert last name*</p> */}
            </div>
          </div>
      </div>
      <button className="save-btn">SAVE</button>
    </div>

  )
}

export default profile