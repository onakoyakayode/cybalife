import React from 'react'
import './HomePage.css'
import Header from '../../Header/Header'
import Location from '../../Location/Location'
import Navbar from '../../NavBar/Navbar'
import WhatWeDoImage from '/Images/what-we-do.svg'
import WhatWeDoImageBackground from '/Images/what-we-do-back.svg'
import Rx from '/Icons/Vector.svg'
import Clinic from '/Icons/Clinic.svg'
import OutPatient from '/Icons/Outpatient.svg'
import Group from '/Icons/Group.svg'
import Doctor from '/Icons/Doctor.svg'
import AccidentAndEmergency from '/Icons/Accident and Emergency.svg'
import HowItWorkImage from '/Images/how-it-work.svg'
import HowItWorkImageBg from '/Images/how-it-work-bg.svg'
import ReachOutImg from '/Images/ReacOutImg.svg'
import ReachOutImgBg from '/Images/ReachOutBg.svg'
import Testimonial from '../../Testimonial/Testimonial'
import AppleIcon from '@mui/icons-material/Apple';
import Footer from '../../Footer/Footer'

const HomePage = () => {
  return (
    <>
    <div className='home-page container'>
      <Navbar />
      <Header />
      <Location />
      <section className="what-we-do">
        <div className="what-we-do-image">
            <img src={WhatWeDoImage} alt="patient" className="what-we-do-img" />
            <img src={WhatWeDoImageBackground} alt="patient" className="what-we-do-img-bck" />
        </div>
        <div className="what-we-do-text">
            <h1 className='what-we-do-title'>What We Do.</h1>
            <p className="what-we-do-text">
                <strong>Cybalife</strong> is a hybrid robotic health solution powers by artificial intelligence and provides accurate diagnosis, prescription, surgical assistance and general well being for both young and old.
                <br/>
                <br/>
                Our goal is to make healthcare accessible, affordable and convenient for everyone, so that everyone can live their best life.
            </p>
        </div>
      </section>
      <section className="our-offering">
        <h1 className='our-offering-title'>Our Offerings.</h1>
        <div className="our-offering-details">
            <div className="our-offering-details-tab tab-a">
                <img src={Rx} alt="Pharmacy" className="our-offering-img" />
                <p className='our-offering-tab-text'>Buy quality new and used Pharmaceutical items, all in one place.</p>
            </div>
            <div className="our-offering-details-tab tab-b">
                <img src={Clinic} alt="Pharmacy" className="our-offering-img" />
                <p className='our-offering-tab-text'>Find the right hospital, Laboratory, HMO for your Needs.</p>
            </div>
            <div className="our-offering-details-tab tab-c">
            <img src={OutPatient} alt="Pharmacy" className="our-offering-img" />
                <p className='our-offering-tab-text'>Talk to medical experts, and get advice on health issues, anytime, anywhere.</p>
            </div>
            <div className="our-offering-details-tab tab-d">
            <img src={Group} alt="Pharmacy" className="our-offering-img" />
                <p className='our-offering-tab-text'>Shop both new and old medical equipment at affordable prices.</p>
            </div>
            <div className="our-offering-details-tab tab-e">
            <img src={Doctor} alt="Pharmacy" className="our-offering-img" />
                <p className='our-offering-tab-text'>Get help from our offline AI doctor when a consultant is unavailable.</p>
            </div>
            <div className="our-offering-details-tab tab-f">
            <img src={AccidentAndEmergency} alt="Pharmacy" className="our-offering-img" />
                <p className='our-offering-tab-text'>Get real help in any emergency situations or accidents.</p>
            </div>
        </div>
      </section>
      <section className="how-it-works">
        <div>
            <h1 className="how-it-works-title">How It Works.</h1>
            <div className='how-it-works-text'>
                <p>Our solutions are easy to use and accessible from anywhere. <a className='signUp' href="#">Simply sign up</a> amd you’ll have access to a world of healthcare services and products.
                </p>
                <p className='how-it-works-text2'>
                    Our platforms are powered by powered by artificial intelligence, which means you’ll get fast and accurate diagnosis and prescriptions. Plus, you’ll have access to expert medical consultants who can help you make informed decisions about your health.</p>
            </div>
        </div>
        <div className="how-it-works-image">
            <img src={HowItWorkImage} alt="Patient" className="how-it-work-img" />
            <img src={HowItWorkImageBg} alt="Patient" className="how-it-work-img bg" />
        </div>
      </section>
      <section className="reach-out">
        <div className='reach-out-image'>
            <img src={ReachOutImg} alt="" className="reach-out-img" />
            <img src={ReachOutImgBg} alt="" className="reach-out-img-bg" />
        </div>
        <div className="reach-out-details">
            <h2 className="reach-out-title">Reach out to more patients</h2>
            <div className='reach-out-text'>
                <p>Join the <strong>Cybalife</strong> network of medical professionals.</p>
                <p>With our <strong>top-notch health tech solutions</strong>, you have all the tools to deliver premium health care services.</p>
                <p>Connect with patients, offer expert advice and expand your reach, all from the comfort of your own practice.</p>
                <p><strong>Sign up and start connecting.</strong></p>
            </div>
            <button className="register">Register</button>
        </div>
      </section>
    </div>
    <Testimonial />
    <section className="download container">
        <div className="download-container">
            <div className="download-link">
                <h1 className='download-link-title'>Download <span>Cybalife</span> App</h1>
                <p className='download-link-text'>Download the Cybalife App today! <br/>Connect with patients, or start your journey to a better and healthier life.</p>
                <div className="download-btns">
                    <button className="download-btn ios">
                        <AppleIcon className='apple-icon'/>
                        Apple
                    </button>
                    <button className="download-btn android">
                        <img src="../../../Icons/playStore.svg" alt="google" className="google-img" />
                        Google Play store</button>
                </div>
            </div>
            <div className="download-phone-img">
                <img src="../../../Images/iphone14.svg" alt="iphone14" className="phone-img" />
            </div>
        </div>
        <img src="../../../Icons/circle.svg" alt="circle" className='download-circle a'/>
        <img src="../../../Icons/circle.svg" alt="circle" className='download-circle b'/>
    </section>
    <Footer />
    </>
  )
}

export default HomePage
