import React from 'react'
import NavbarLanding from '@/components/navbarLanding'
import LandingComp from '@/components/portals/home'
import SideNav from '@/components/navbarSide'
import './layout.css'
// import Image from 'next/image'

export default function LandingPageComp() {
  return (
    <div>
      <NavbarLanding />
      <div className="row-container">
        <div className='field-container'>
          <SideNav />
        </div>
        <div className='field-container'>
          <LandingComp />
        </div>
      </div>
    </div>
  )
}