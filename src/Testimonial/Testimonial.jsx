import React from 'react'
import './Testimonial.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';


const Testimonial = () => {
  return (
    <div className='testimonial container'>
      <h1 className="testimonial-title">Testimonials.</h1>
      <div className="testimonial-details">
        <div className="testimonial-acct">
            <img src="/Images/patient1.svg" alt="" className="testimonial-acct-img" />
            <p className='testimonial-acct-text'>Cybalife has changed my life. I use to wait long hours to see a doctor but now I can get a diagnosis in minutes. I’m so grateful for this platform.</p>
            <div className="testimonial-star-rating">
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
            </div>
            <div className="testimonial-name">
                <p>Sarah,</p>
                <p>36.</p>
            </div>
        </div>
        <div className="testimonial-acct">
            <img src="/Images/patient3.svg" alt="" className="testimonial-acct-img" />
            <p className='testimonial-acct-text'>Cybalife has changed my life. I use to wait long hours to see a doctor but now I can get a diagnosis in minutes. I’m so grateful for this platform.</p>
            <div className="testimonial-star-rating">
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
            </div>
            <div className="testimonial-name">
                <p>John,</p>
                <p>56.</p>
            </div>
        </div>
        <div className="testimonial-acct">
            <img src="/Images/patient4.svg" alt="" className="testimonial-acct-img" />
            <p className='testimonial-acct-text'>Cybalife has changed my life. I use to wait long hours to see a doctor but now I can get a diagnosis in minutes. I’m so grateful for this platform.</p>
            <div className="testimonial-star-rating">
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon checked'/></span>
                <span><StarOutlinedIcon className='rating-icon'/></span>
            </div>
            <div className="testimonial-name">
                <p>Matthew,</p>
                <p>33.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
