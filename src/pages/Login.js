import React from 'react'
import Template from '../components/Template'
import loginPic from '../assets/login.avif'

export default function Login({ setIsLoggedIn }) {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={loginPic}
        formtype="Login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}
