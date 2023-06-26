import React from 'react'

export default function ContactUs() {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center gap-3 text-center my-5 '>

      <div className='text-bold h3 my-3'>Contact Us</div>

      <div className="w-75">
        We value your feedback, questions, and inquiries. Feel free to reach out to us using the contact information provided below. Our dedicated support team is here to assist you.
      </div>

      <div className="w-75 my-2">
        Email: <a href="/">info@website.com </a><br />
        Phone: <tel>+1-123-456-7890</tel> <br />
        Address: 123 Main Street, City, State, Zip Code
      </div>

      <div className='w-75 my-3'>
        We look forward to hearing from you and providing the assistance you need.
      </div>
    </div>
  )
}
