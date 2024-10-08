import React from 'react'
import './navbarLanding.css';

const navbarLanding = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <div className="navbar-title-txt">OcuGene</div>
      </div>

      <div className="navbar-btn-container">
        <button className="navbar-btn">HOME</button>
        <button className="navbar-btn">LOGIN</button>
      </div>
    </div>
  )
}

export default navbarLanding
