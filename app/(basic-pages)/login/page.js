import React from 'react'
import NavbarLanding from '@/components/navbarLanding'
import LoginComp from '@/components/loginPageComp'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div>
      <NavbarLanding></NavbarLanding>
      <LoginComp></LoginComp>
    </div>
  )
}

export default LoginPage