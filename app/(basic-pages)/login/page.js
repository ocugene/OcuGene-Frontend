'use client';

import React, { useState, useEffect } from 'react';
// import React from 'react'
import NavbarLanding from '@/components/navbarLanding'
import LoginComp from '@/components/loginPageComp'
import Image from 'next/image'
import Back from '@/components/backbutton'


const LoginPage = () => {
  return (
    <div>
      <NavbarLanding></NavbarLanding>
      <Back></Back>
      <LoginComp></LoginComp>
    </div>
  )
}

export default LoginPage