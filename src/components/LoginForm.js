import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


export default function LoginForm({ setIsLoggedIn }) {

  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "", password: ""
  });

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value
      }
    ))
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success('Logged In!')
    Navigate('/dashboard');
    console.log(formData)
  }



  return (
    <div className='form'>
      <form onSubmit={handleFormSubmit}>
        <div className="email">
          <label htmlFor="email">Email Address<sup>*</sup></label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter email address'
            required>
          </input>
        </div>

        <div className="password w-100">
          <label htmlFor="password">
            Enter Password<sup>*</sup>
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter Password'
            required>
          </input>

          <span className='pwdIcon' onClick={() => setShowPassword((prev) => !prev)}>
            {
              showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
            }
          </span>

          <Link className='frgtpwd' to='#'>Forgot password?</Link>
        </div>

        <button className='signIn-btn'>Sign In</button>
      </form>
    </div>
  )
}
