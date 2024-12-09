'use client';

import React from 'react'
import NavbarLanding from '@/components/navbarLanding'
import SignUpForm from '@/components/signUpComp'
import Back from '@/components/backbutton'

const page = () => {
  return (
    <div>
        <NavbarLanding></NavbarLanding>
        <Back></Back>
        <SignUpForm></SignUpForm>
    </div>
  )
}

export default page