import React from 'react'
import './Footer.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
  return (
    <footer className='footer container'>
        <div className='footer-container'>
            <div className="footer-title">
                <h1 className='footer-title-text'>Cybalife</h1>
                <div className="footer-title-input">
                    <p className='footer-title-input-text'>Get our newsletter</p>
                    <div className='footer-email-input'>
                        <input type="text" name="" id="" placeholder='Enter your Email' className='footer-input'/>
                        <div className='arrow'>
                            <ArrowForwardIcon className='arrow-forward' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-about">
                <h3>About Us</h3>
                <ul className='footer-link'>
                    <li className='footer-link-item'>Cybalife Healthcare Solutions</li>
                </ul>
            </div>
            <div className="footer-service">
                <h3>Our Services</h3>
                <ul className='footer-link'>
                    <li className='footer-link-item'>Consultation</li>
                    <li className='footer-link-item'>Offline AI Doctor</li>
                    <li className='footer-link-item'>Market Place</li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Contact us</h3>
                <ul className='footer-link'>
                    <li className='footer-link-item'>Address: <a href="#">Ikeja, Lagos</a></li>
                    <li className='footer-link-item'>Email: <a href="mailto:info@cybalife.net">info@cybalife.net</a></li>
                    <li className='footer-link-item'>Contact: <a href="tel:+2348135543228">+2348135543228</a></li>
                    <li className='footer-link-item'>Website: <a target='_blank'  href="https://www.cybadot.com">www.cybadot.com</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
