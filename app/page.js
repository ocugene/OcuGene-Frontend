import React from 'react'
import NavbarLanding from '@/components/navbarLanding'
import './page.css';

const LandingPage = () => {
  return (
    <div>
      <NavbarLanding></NavbarLanding>
      <div className="landing-page">
        <div className="row-container">
          <div className="col-container">
            <label>Basic Information</label>
            <div className="row-container">
              <div className="col-container">
                <button>Disease 1</button>
              </div>
              <div className="col-container">
                <button>Disease 2</button>
              </div>
              <div className="col-container">
                <button>Disease 3</button>
              </div>
            </div>
          </div>
          <div className="col-container">
          <label>Families</label>
            <div className="row-container">
              <div className="col-container">
                <button>Donate Registry</button>
              </div>
              <div className="col-container">
                <button>Support Group</button>
              </div>
              <div className="col-container">
                <button>Financial Assistance</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage