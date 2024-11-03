import React from 'react'
import './profile.css';
const profile = () => {
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
              <p className="info-personal">*insert last name*</p>
              <p className="info-title">First Name</p>
              <p className="info-personal">*insert first name*</p>
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
              <p className="info-personal">*insert User ID*</p>
              <p className="info-title">Email</p>
              <p className="info-personal">*insert email*</p>
              <p className="info-title">Password</p>
              <div className="pw">
                <p className="info-personal">*insert password*</p>
                <button className="change-pw">Change Password</button>
              </div>
              <p className="info-title">Account Type</p>
              <p className="info-personal">*insert acct type*</p>
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