import React, { useState } from 'react'
import Navbar from '../../NavBar/Navbar'
import './BookAppointment.css'
import DoctorsProfile from "../../Doctors'Profile.js";
import verfiedDoctor from '/Icons/verifiedDoctor.svg'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import Notification from '../../PopUp/Notification/Notification'

const BookAppointment = () => {

    const [showNotification, setShowNotification] = useState(false)
    const [showContent, setShowContent] = useState(false)

    const toggleContent = () => {
        setShowContent(!showContent)
    }

    const toggleModal = () => {
        setShowNotification(!showNotification)
    }
 


    const specialty = ["Cardiologist", "Dermatologist", "ENT specialist", "Gynecologist", "Neurologist", "Oncologist", "Opthamologist", "Pathologist", "Pediatrics", "Psychiatric", "Urologist"]
    const Location = ["Lagos", "Abuja", "Ibadan", "Abia", "Kaduna", "Katsina", "Enugu", "Calabar"]



  return (
    <>
    <div className='book-appointment container'>
      <Navbar />
      <section className='book-appointment-container'>
        <div className="book-appointment-header">
            <div className="book-appointment-header-text">
                <h1 className="book-appointment-header-title">Book appointment with capable health specialist</h1>
                <div className="book-appointment-specialty">
                    <label htmlFor="specialty">Select Specialty</label>
                    <select name="specialty" id="specialty" className='select-specialty'>
                        {specialty.map((item, index) => 
                        <option className='specialty-opt' key={index} value={item}>{item}</option>)}
                    </select>
                </div>
                <div className="book-appointment-location">
                    <label htmlFor="location">Select Location</label>
                    <select name="location" id="location" className='select-location'>
                        {Location.map((location, index) => 
                        <option key={index} value={location}>{location}</option>)}
                    </select>
                </div>
                <button className="book-appointment-search-specialty">Search specialist</button>
            </div>
            <div className="book-appointment-img">
                <div className="book-appointment-bg">
                    <img src="../../../Images/bookApp2.svg" alt="appointmentImg" className="imgOrangeBg" />
                    <img src="../../../Images/bookApp1.svg" alt="appointmentImg" className="imgBlueBg" />
                </div>
                <img src="../../../Images/bookAppImg.svg" alt="Doctor-appointment" className="book-appointment-doctor-img" />
                <h3 className="book-appointment-tag">Dermatologist ,15 years of experience</h3>
            </div>
        </div>
      </section>
      <section className="onlineDoctors">
        <div className="onlineDoctorTop">
            <h1 className="onlineDoctorsTitle">Online Doctors</h1>
            <p className='onlineDoctorSeeMore'>See more</p>
        </div> 
        <div className='onlineDoctorProfiles'>
            {DoctorsProfile.map(({id, image, name, post, title, specialization, callNow, status, verified}) =>
                <div key={id}>
                    <div key={id} className="onlineDoctorsProfile">
                        <div className="onlineDoctorImage">
                            <img src={image} alt={name} className="onlineDoctorImg" />
                            <span className="onlineStatus"></span>
                        </div>
                        <div className="onlineDoctorName">
                            <h3 className="doctorName">{name}</h3>
                            {verified ? <img src={verfiedDoctor} alt="verified" className='verifiedTag' /> : "null"}
                        </div>
                        <span className="onlineDoctor">{post}</span>
                        <div className="onlineDoctorRole">
                            <span className="onlineDoctorRoleTitle">{title}</span>
                            <span className="onlineDoctorRoleSpecialization">{specialization}</span>
                        </div>
                        <a className="callNow" href="tel:">Call Now</a>
                        <h4 className="onlineDoctorProfileSeeMore">view more details</h4>
                    </div>
                </div>
            )}
        </div>
      </section>
      <section className="top-rated-doctors">
        <h1 className="top-rated-doctors-title">Top Rated Doctors</h1>
        <div className="top-rated-doctors-profiles">
        <div style={{
          height: showContent ? "auto" : "1600px",
          overflow: "hidden",
          transition: "height 0.5s ease-in-out",
          width: "100%",}}
          >
            {DoctorsProfile.map(({id, title, name, image, post, specialization}) =>
                <div key={id} className="top-rated-doctors-profile">
                    <div className="top-rated-doctors-profile-acct">
                        <img src={image} alt="" className="doctors-profile-img" />
                        <div className="top-rated-doctors-profile-name">
                            <h3 className='top-rated-doctors-profile-name-title'>{name}
                                <img src={verfiedDoctor} alt="verified-Doctor" />
                            </h3>
                            <p className='top-rated-doctors-profile-post'>{post}</p>
                            <span className='top-rated-doctors-profile-title '>{title}</span>
                            <p className='top-rated-doctors-profile-specialization'>{specialization}</p>
                            <p className="top-rated-doctors-experience">
                                <span>Exeperience</span>
                                <span>15 Years</span>
                            </p>
                            <p className="top-rated-doctors-ratings">
                                <span>Ratings</span>
                                <div className="top-rated-doctors-star-rating">
                                    <span><StarOutlinedIcon className='top-rated-doctors-rating-icon checked'/></span>
                                    <span><StarOutlinedIcon className='top-rated-doctors-rating-icon checked'/></span>
                                    <span><StarOutlinedIcon className='top-rated-doctors-rating-icon checked'/></span>
                                    <span><StarOutlinedIcon className='top-rated-doctors-rating-icon checked'/></span>
                                    <span><StarOutlinedIcon className='top-rated-doctors-rating-icon'/></span>
                                </div>
                                <span className='top-rated-doctors-ratings-count'>1000+</span>
                            </p>
                        </div>
                    </div>
                    <div className="contact-doctor">
                        <button className="book-appointment-btn contact-doctor-btn">Book Appointment</button>
                        <button className="call-now-btn contact-doctor-btn">Call Now</button>
                    </div>
            
                </div>
                )}
        </div>

            <h3 onClick={toggleContent} className='top-rated-doctors-see-more'>See More</h3>
        </div>
        <div className="top-rated-doctors-need-information">
            <h3 className='top-rated-doctors-need-information-title'>Need more  information on Dermatology Medicine?</h3>
            <p className="top-rated-doctors-need-information-links">
                <a onClick={toggleModal} className='top-rated-doctors-need-information-link yes-i-do'>Yes, I do</a>
                <a href="#" className='top-rated-doctors-need-information-link no-i-dont'>No, I don't</a>
            
            </p>
        </div>
      </section>
      {showNotification ? <Notification setShowNotification={setShowNotification} /> : ""}
    </div>
    <Footer />
    </>
  )
}

export default BookAppointment
