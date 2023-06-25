import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


export default function SignUpForm({ setIsLoggedIn }) {

  const Navigate = useNavigate();

  const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "", confirmpwd: "" })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value
      }
    ))
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpwd) {
      toast.error("Passwords not matching.")
      return;
    }
    setIsLoggedIn(true)
    Navigate('/dashboard')
    toast.success("Account created")
    const accountData = { ...formData };
    console.log(accountData)
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>


      <form onSubmit={handleFormSubmit}>
        <div className="common">
          <div className="fn">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              type='text'
              name='firstname'
              placeholder='Enter first name'
              onChange={handleChange}
              value={formData.firstname}
              required
            />
          </div>

          <div className="ln">
            <label>
              Last name <sup>*</sup>
            </label>
            <input
              type='text'
              name='lastname'
              placeholder='Enter last name'
              onChange={handleChange}
              value={formData.lastname}
              required
            />
          </div>


        </div>

        <div className="email">
          <label htmlFor="email">Email Address <sup>*</sup></label>
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

        <div className="common">
          <div className='create-pwd'>
            <label>Create password <sup>*</sup></label>
            <input
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange}
              name='password'
              value={formData.password}
              placeholder='Enter Password'
              required
            />
            <span className='pwdIcon' onClick={() => setShowPassword(prev => !prev)}>
              {
                showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
              }
            </span>
          </div>

          <div className=''>
            <label>Confirm password <sup>*</sup></label>
            <input
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange}
              name='confirmpwd'
              value={formData.confirmpwd}
              placeholder='Confirm Password'
              required
            />
            <span className='pwdIcon' onClick={() => setShowPassword(prev => !prev)}>
              {
                showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
              }
            </span>
          </div>

        </div>

        <button>Create Account</button>

      </form >

    </div >
  )
}
