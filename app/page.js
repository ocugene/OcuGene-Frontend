import React from 'react'
import NavbarLanding from '@/components/navbarLanding'
import './page.css';

const LandingPage = () => {
  return (
    <>
      <div>
        <NavbarLanding></NavbarLanding>
        {/*white area */}
        <div className="landing-page">
          <div className="lp-basic">
            <div className="lp-basic-title">Basic Information</div>
            <div className="lp-basic-dis-container">
              <div className="lp-basic-disease">Disease 1</div>
              <div className="lp-basic-disease">Disease 2</div>
              <div className="lp-basic-disease">Disease 3</div>
            </div>
          </div>

          <div className="lp-fam">

          </div>

        </div>
      </div>
      
    </>
  )
}

export default LandingPage