import React from 'react'
import './SignIn.css'
import Logo from '/Icons/Cybalife-Logo.svg'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='signIn'>
      <div className="signIn-white-bg container">
        <Link to='/' className='signin-logo'>
            <img src={Logo} alt="Cybalife" className="signInImg" />
        </Link>
        <div className="signInImage">
            <img src="/Images/connection.svg" alt="Cybalife" className="signInImg" />
        </div>
        <h3 className="signInText">Access Quality Healthcare Anytime, Anywhere.</h3>
      </div>
      <div className="signIn-main-bg">
        <h1 className='signin-title'>Login to your Account</h1>
        <form className="signinForm">
            <div className="sign-in-email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Email Address'/>
            </div>
            <div className="sign-in-password">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Password'/>
            </div>
            <div className="remember-me">
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label id='remember-me-label' htmlFor="remember-me">remember me</label>
            </div>
            <button className='signupBtn' type="submit">Sign In</button>
        </form>
        <p className="sign-in-text">Or sign in with</p>
        <div className="sign-in-social-media">
            <div className='google-sign-in'>
                <img src="/Icons/GoogleIcon.svg" alt="Google" />
            </div>
            <img src="/Icons/Facebook.svg" alt="Google" className="facebook-sign-in" />
        </div>
        <p className="sign-in-link">
            Dont have an account?
            <Link to='/signup' className='to-sign-in'>Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn