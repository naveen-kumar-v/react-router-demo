import React from 'react'
import Template from '../components/Template'
import signupPic from '../assets/signUp.avif'

export default function SignUp({ setIsLoggedIn }) {
    return (
        <div>
            <Template
                title="Join the millions learning to code with StudyHolics for free."
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={signupPic}
                formtype="signup"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}
