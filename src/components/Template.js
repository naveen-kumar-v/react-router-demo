import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import googlelogo from '../assets/googlelogo.png'

export default function Template({ title, desc1, desc2, formtype, image, setIsLoggedIn }) {
  return (
    <div className="wrapper">
      <div className='login-signup'>
        <div className='template'>
          <h1 className='title'>{title}</h1>
          <p className='desc'>
            <span>{desc1}</span>
            <span>{desc2}</span>
          </p>

          {
            formtype === "signup" ?
              <SignUpForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />
          }

          <div className='or'>
            <div></div>
            <p>OR</p>
            <div></div>
          </div>

          <button className='googleBtn'>
            <img src={googlelogo} alt='Google-Icon' width={18} height={18} />
            Sign up with Google
          </button>

        </div>

        <div className='login-signup-pic'>
          <img src={image} alt='login/signup pic' width={430} height={480} loading='lazy' />
        </div>
      </div>
    </div>

  )
}
