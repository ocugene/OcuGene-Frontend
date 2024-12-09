import React from 'react'
import NavbarLanding from '@/components/navbarLanding'
import LandingComp from '@/components/portals/home'
import SideNav from '@/components/navbarSide'
// import '@components/portals/layoutMain.css'
// import './layout.css'
// import Image from 'next/image'

export default function LandingPageComp() {
  return (
    <div>
      <NavbarLanding />
      <div className="row-container">
        <div className='side-container'>
          <SideNav />
        </div>
        <div className='component-container'>
          <LandingComp />
        </div>
      </div>
    </div>
  )
}