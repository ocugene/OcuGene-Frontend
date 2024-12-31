import React, { useState, useEffect } from 'react';
import './profile.css';
import ChangePassword from './changePassword';

const Profile = () => {
  const [accountType, setAccountType] = useState('');
  const [username, setUsername] = useState('');
  const [isChangePasswordVisible, setIsChangePasswordVisible] = useState(false);
  const [userData, setUserData] = useState({
    userId: 0,
    username: "",
    userPassword: "",
    userType: "",
    firstName: "",
    lastName: "",
    contactNumber: ""
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAccountType(localStorage.getItem('role'));
      setUsername(localStorage.getItem('username'));
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://ocugene-backend-1-production.up.railway.app/user/getByUsername?username=${username}`);
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

  const handleChangePasswordClick = () => {
    setIsChangePasswordVisible(true); // Show the ChangePassword popup
  };

  const closeChangePasswordPopup = () => {
    setIsChangePasswordVisible(false); // Hide the ChangePassword popup
  };

  return (
    <div className="profile-page">
    <div className="title-profile">Profile</div>
      <div className="profile-container">
        <div className="personalContainer">
          <h2>Personal Information</h2>
          <div className="personal-info">
            <div className="namesColumn">
              <p className="info-title">Last Name</p>
              <p className="info-personal">{userData.lastName}</p>
              <p className="info-title">First Name</p>
              <p className="info-personal">{userData.firstName}</p>
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
            <div className="acctColumn">
              <p className="info-title">User ID</p>
              <p className="info-personal">{userData.username}</p>
              <p className="info-title">Email</p>
              <p className="info-personal">*insert email*</p>
              <p className="info-title">Password</p>
              <div className="pw">
                <p className="info-personal">{"*".repeat(userData.userPassword.length)}</p>
                <button className="change-pw" onClick={handleChangePasswordClick}>
                  Change Password
                </button>
              </div>
            </div>
            <div className="acctTypeColumn">
              <p className="info-title">Account Type</p>
              <p className="info-personal">{accountType}</p>
            </div>
          </div>
        </div>
        <button className="save-btn">SAVE</button>
      </div>

      {/* Popup for ChangePassword */}
      {isChangePasswordVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <ChangePassword onClose={closeChangePasswordPopup} username={userData.username}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
