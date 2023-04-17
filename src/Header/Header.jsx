import React from 'react'
import './Header.css'
import Image from '/Images/homePage.svg'
import CIOReview from '/Images/CIO.svg'
import Crismo from '/Images/Crismo.svg'
import cenUniversity from '/Images/freeUniversity.svg'
import PhoneIcon from '@mui/icons-material/Phone';
import patient1 from '/Images/patient1.svg'
import patient2 from '/Images/patient2.svg'
import patient3 from '/Images/patient3.svg'
import patient4 from '/Images/patient4.svg'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className="header-container">
        <div className="header-flex-1">
            <div className='header-title'>
                <h1>Experience <span>Healthcare</span> Like Never Before.</h1>
                <p className='header-text'>Say <span>goodbye</span> to the long waited times, limited access to quality healthcare.
                    Empower yourself with the healthcare you deserve. <span>No more settling for less.</span>
                </p>
                <p>Start your journey to better health with <strong>Cybalife</strong></p>
                <Link to='/BookAppointment'>
                    <button className="get-started">Get Started</button>
                </Link>
            </div>
            <div className='partners'>
                <h2>Our Partners</h2>
                <div className="partners-logo">
                    <img src={CIOReview} alt="cioReview" className='partner-img' />
                    <img src={Crismo} alt="crismo" className='partner-img' />
                    <img src={cenUniversity} alt="cenUniversity" className='partner-img' />
                </div>
            </div>
        </div>
        <div className='header-flex-2'>
            <div className='header-flex-2-1'>
                <img src={Image} alt="cybalife-doctor" className='header-img' />
            </div>
            <div className="call-service">
                <div className='call-service-phone'>
                    <PhoneIcon className='phone-icon' />
                </div>
                <h3 className="call-service-text">24 Hour Service</h3>
            </div>
            <div className="header-flex-2-patients">
                <div className="header-flex-2-patients-img">
                    <img src={patient2} alt="patient" className='patient-img' />
                    <img src={patient1} alt="patient" className='patient-img' />
                    <img src={patient3} alt="patient" className='patient-img' />
                    <img src={patient4} alt="patient" className='patient-img' />
                    <div className="header-flex-2-patients-plus">46+</div>
                </div>
                <h3 className="header-flex-2-patients-count">150+ Patients</h3>
                <div className="header-flex-2-patients-review">
                    <span className="star"><StarIcon className='star-icon'/></span>
                    <span className="rating">5.0</span>
                    <span className="review">(120k Reviews)</span>
                </div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
