import {React, useState, useEffect} from 'react'
import './profile.css';
const Profile = () => {

  const [accountType, setAccountType] = useState('');
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(
    {
      userId: 0,
      username: "",
      userPassword: "",
      userType: "",
      firstName: "",
      lastName: "",
      contactNumber: ""
    }
  );

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      // Safe to use localStorage in the browser
      setAccountType(localStorage.getItem('role'));
      setUsername(localStorage.getItem('username'));
    }
  }, []);

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/user/getByUsername?username=${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };
  
    if (username) {
      fetchUserData();
    }
    
  }, [username]);


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
              <p className="info-personal">{userData.lastName}</p>
              <p className="info-title">First Name</p>
              <p className="info-personal">{userData.firstName }</p>
            </div>
            <div className="contactColumn">
              <p className="info-title">Contact Number</p>
              <p className="info-personal">{userData.contactNumber}</p>
            </div>
          </div>
      </div>
      <div className="accountContainer">
          <h2>Account Information</h2>
          <div className="personal-info">
            <div className="namesColumn">
              <p className="info-title">User ID</p>
              <p className="info-personal">{userData.username}</p>
              <p className="info-title">Email</p>
              <p className="info-personal">*insert email*</p>
              <p className="info-title">Password</p>
              <div className="pw">
                <p className="info-personal">{"*".repeat(userData.userPassword.length)}</p>
                <button className="change-pw">Change Password</button>
              </div>
              <p className="info-title">Account Type</p>
              <p className="info-personal">{accountType}</p>
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

export default Profile