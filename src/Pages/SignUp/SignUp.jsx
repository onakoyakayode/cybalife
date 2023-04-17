import React from 'react'
import './SignUp.css'
import Logo from '/Icons/Cybalife-Logo.svg'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div className='signup'>
        <div className="signup-main-bg container">
            <h1 className="signup-title">Get Started</h1>
            <form className="signupForm">
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Email Address'/>
                </div>
                {/* <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Email Address'/>
                </div> */}
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Password'/>
                </div>

                <button className='signupBtn' type="submit">Sign Up</button>
            </form>
            <p className="sign-in-text">Or sign in with</p>
            <div className="sign-in-social-media">
                <div className='google-sign-in'>
                    <img src="/Icons/GoogleIcon.svg" alt="Google" />
                </div>
                <img src="/Icons/Facebook.svg" alt="Google" className="facebook-sign-in" />
            </div>
            <p className="sign-in-link">
                Already have an account?
                <Link to='/signin' className='to-sign-in'>Sign In</Link>
            </p>
        </div>
        <div className='signup-white-bg'>
            <Link to='/' className="signup-logo">
                <img src={Logo} alt="Cybalife" className="signupLogo" />
            </Link>
            <div className="signUpImage">
                <div className="signupImg">
                    <img src="/Images/signUpBlueBg.svg" alt="BlueBg" className='signupBlueBg'/>
                    <img src="/Images/SignUpImg.svg" alt="Doctor" className='signUpDoctorImg' />
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default SignUp
