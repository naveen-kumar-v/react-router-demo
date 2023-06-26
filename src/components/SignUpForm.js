import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


export default function SignUpForm({ setIsLoggedIn }) {

  const Navigate = useNavigate();

  const [formData, setFormData] = useState({ accountType: '', firstname: "", lastname: "", email: "", password: "", confirmpwd: "" })

  const [showPassword, setShowPassword] = useState(false)
  const [showCnfPassword, setShowCnfPassword] = useState(false)
  const [accountType, setAccountType] = useState('student')

  const handleChange = (e) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value
      }
    ))
  }

  const studAcc = {
    backgroundColor: '#000',
    color: 'white',
    borderRadius: '20px',
    border: 'none'
  }

  const instAcc = {
    backgroundColor: '#282e35',
    color: 'white',
    borderRadius: '20px',
    opacity: '0.5',
    border: 'none'
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
    const accountData = { ...formData, accountType };
    console.log(accountData)
  }

  return (
    <div >
      <div className='accTypeDiv'>
        <button onClick={() => {
          setAccountType('student')
        }}
          style={accountType === 'student' ? studAcc : instAcc}
        >
          Student
        </button>
        <button onClick={() => {
          setAccountType('instructor')
        }}
          style={accountType !== 'student' ? studAcc : instAcc}
        >
          Instructor
        </button>
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

          <div className='confirm-pwd'>
            <label>Confirm password <sup>*</sup></label>
            <input
              type={showCnfPassword ? 'text' : 'password'}
              onChange={handleChange}
              name='confirmpwd'
              value={formData.confirmpwd}
              placeholder='Confirm Password'
              required
            />
            <span className='pwdIcon' onClick={() => setShowCnfPassword(prev => !prev)}>
              {
                showCnfPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
              }
            </span>
          </div>

        </div>

        <button className='createAccBtn'>Create Account</button>

      </form >

    </div >
  )
}
