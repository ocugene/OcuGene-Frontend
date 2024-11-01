'use client';

import React from 'react'
import NavbarLanding from '@/components/navbarLanding'
import SignUpForm from '@/components/signUpComp'

const page = () => {
  return (
    <div>
        <NavbarLanding></NavbarLanding>
        <SignUpForm></SignUpForm>
    </div>
  )
}

export default page