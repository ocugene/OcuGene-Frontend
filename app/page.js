import React from 'react'
import NavbarLanding from '@/components/navbarLanding'
import LandingComp from '@/components/landingPageComp'
import Image from 'next/image'

export default function LandingPageComp() {
  return (
    <div>
      <NavbarLanding></NavbarLanding>
      <LandingComp></LandingComp>
    </div>
  )
}