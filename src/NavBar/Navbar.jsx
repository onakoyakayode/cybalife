import React, { useState } from 'react'
import './Navbar.css'
import logo from '/Icons/Cybalife-Logo.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)
    const [isOpened, setIsOpened] = useState(false)
    const [isListing, setIsListing] = useState(false)
    const [isMarket, setIsMarket] = useState(false)
    const [isEmergency, setIsEmergency] = useState(false)
    

    function handleMouseEnter() {
      setIsOpen(true)
    }
    function handleMouseLeave() {
      setIsOpen(false)
    }

    function handleHoverEnter() {
      setIsOpened(true)
    }

    function handleHoverLeave() {
      setIsOpened(false)
    }

    function handleListingEnter() {
      setIsListing(true)
    }

    function handleListingLeave() {
      setIsListing(false)
    }

    function handleMarketEnter() {
      setIsMarket(true)
    }

    function handleMarketLeave() {
      setIsMarket(false)
    }

    function handleEmergencyEnter() {
      setIsEmergency(true)
    }

    function handleEmergencyLeave() {
      setIsEmergency(false)
    }



    const fad = [
      {
        id: 1,
        title: "Book Appointment",
        link: '',
      },
      {
        id: 2,
        title: "Offline AI Doctor",
        link: '',
      },
      {
        id: 3,
        title: "Instant Consultation",
        link: '',
      },
    ]

    const listing = [
      {
        id: 1,
        title: "Hospitals",
        link: '',
        hospitals: [
          {
            id: 1,
            title: "Lagos",
            link: ""
          },
          {
            id: 2,
            title: "Abuja",
            link: ""
          },
          {
            id: 3,
            title: "Ibadan",
            link: ""
          },
          {
            id: 4,
            title: "Abia",
            link: ""
          },
          {
            id: 5,
            title: "Kaduna",
            link: ""
          },
          {
            id: 6,
            title: "Katsina",
            link: ""
          },
          {
            id: 7,
            title: "Enugu",
            link: ""
          },
          {
            id: 8,
            title: "Calabar",
            link: ""
          },

        ]
      },
      {
        id: 2,
        title: "Laboratories",
        link: '',
      },
      {
        id: 3,
        title: "HMO",
        link: '',
      },
    ]

    const marketPlace = [
      {
        id: 1,
        title: "Pharmaceutical Items",
        link: '',
      },
      {
        id: 2,
        title: "Medical Items",
        link: '',
      },
    ]

    const emergency = [
      {
        id: 1,
        title: "Emergency Call",
        link: '',
      },
      {
        id: 2,
        title: "Ambulance",
        link: '',
      },
    ]


    const hospitalLocation = [
      {
        id: 1,
        title: "Lagos",
        link: ""
      },
      {
        id: 2,
        title: "Abuja",
        link: ""
      },
      {
        id: 3,
        title: "Ibadan",
        link: ""
      },
      {
        id: 4,
        title: "Abia",
        link: ""
      },
      {
        id: 5,
        title: "Kaduna",
        link: ""
      },
      {
        id: 6,
        title: "Katsina",
        link: ""
      },
      {
        id: 7,
        title: "Enugu",
        link: ""
      },
      {
        id: 8,
        title: "Calabar",
        link: ""
      },
    ]



    
  return (
    <nav className='nav'>
      <div className="nav-logo">
        <Link to='/'>
        <img src={logo} alt='cybalife' className='nav-logo-img'/>
        </Link>
      </div>
      <ul className='nav-items'>
        {/* {navItem.map(({id, link, title}) => 
        <div key={id}>
          <Link className='navList' to={link}>
            <li key={id} className="nav-list">{title}</li>
            <KeyboardArrowDownIcon className='nav-icon'/>
          </Link>
        </div>
        )} */}
        <div className='dropwdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <li className='navList'>
            <h3 className='nav-list'>Doctor</h3>
            {isOpen ? <KeyboardArrowUpIcon className='nav-icon'/> : <KeyboardArrowDownIcon className='nav-icon'/> }
          </li>
          {isOpen && (
            <div className="dropdown-content">
              <div className="dropdown-contents">
                <h4 className='dropwdown-contents-title'>Specialties</h4>
                <ul className='dropdown-contents-items'>
                  <li>Cardiologist</li>
                  <li>Dermatologist</li>
                  <li>Opthamologist</li>
                  <li>ENT specialist</li>
                  <li>Neurologist</li>
                  <li>Onocologist</li>
                  <li>Urologist</li>
                  <li>Radiologist</li>
                </ul>
                <a className='dropdown-contents-see-more' href='#'>See more</a>
              </div>
              <div className="dropdown-contents">
                <h4 className='dropwdown-contents-title'>Location</h4>
                <ul className='dropdown-contents-items'>
                  {hospitalLocation.map(({id, title, link}) =>
                    <li key={id}>{title}</li>
                  )}
                </ul>
                <a className='dropdown-contents-see-more' href='#'>See more</a>
                </div>
              <div className="dropdown-contents">
              <h4 className='dropwdown-contents-title'>Diseases</h4>
                <ul className='dropdown-contents-items'>
                  <li>Influenza</li>
                  <li>Coronavirus</li>
                  <li>Cancer</li>
                  <li>Diabetes</li>
                  <li>Malaria</li>
                  <li>Stroke</li>
                  <li>Asthma</li>
                  <li>Hepatitis</li>
                </ul>
                <a className='dropdown-contents-see-more' href='#'>See more</a>
              </div>
            </div>
          )}
        </div>
        <div className='dropwdown' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
          <li className='navList'>
            <h3 className='nav-list'>Consultation</h3>
            {isOpened ? <KeyboardArrowUpIcon className='nav-icon'/> : <KeyboardArrowDownIcon className='nav-icon'/> }
          </li>
          {isOpened && (
            <div className="dropdown-content">
              <div className="dropdown-contents">
                <h4 className='dropwdown-contents-title'>Find a doctor
                  <ul className='dropdown-contents-items'>
                    {fad.map(({id, title, link}) => 
                      <li className='fad' key={id}>{title}
                        <KeyboardArrowRightIcon className='nav-icon' />
                      </li>
                    )}
                  </ul>
                </h4>
              </div>
            </div>
          )}
        </div>
        <div className='dropwdown' onMouseEnter={handleMarketEnter} onMouseLeave={handleMarketLeave}>
          <li className='navList'>
            <h3 className='nav-list'>Marketplace</h3>
            {isMarket ? <KeyboardArrowUpIcon className='nav-icon'/> : <KeyboardArrowDownIcon className='nav-icon'/> }
          </li>
          {isMarket && (
            <div className="dropdown-content">
              <div className="dropdown-contents">
                <h4 className='dropwdown-contents-title'>Med-Shop
                  <ul className='dropdown-contents-items'>
                    {marketPlace.map(({id, title, link}) => 
                      <li className='fad' key={id}>{title}
                        <KeyboardArrowRightIcon className='nav-icon' />
                      </li>
                    )}
                  </ul>
                </h4>
              </div>
            </div>
          )}
        </div>
        <div className='dropwdown' onMouseEnter={handleListingEnter} onMouseLeave={handleListingLeave}>
          <li className='navList'>
            <h3 className='nav-list'>Listing</h3>
            {isListing ? <KeyboardArrowUpIcon className='nav-icon'/> : <KeyboardArrowDownIcon className='nav-icon'/> }
          </li>
          {isListing && (
            <div className="dropdown-content">
              <div className="dropdown-contents">
                <h4 className='dropwdown-contents-title'>Find a doctor
                  <ul className='dropdown-contents-items'>
                    {listing.map(({id, title, link}) => 
                      <li className='fad' key={id}>{title}
                        <KeyboardArrowRightIcon className='nav-icon' />
                      </li>
                    )}
                  </ul>
                </h4>
              </div>
            </div>
          )}
        </div>
        <div className='dropwdown' onMouseEnter={handleEmergencyEnter} onMouseLeave={handleEmergencyLeave}>
          <li className='navList'>
            <h3 className='nav-list'>Emergency</h3>
            {isEmergency ? <KeyboardArrowUpIcon className='nav-icon'/> : <KeyboardArrowDownIcon className='nav-icon'/> }
          </li>
          {isEmergency && (
            <div className="dropdown-content">
              <div className="dropdown-contents">
                <h4 className='dropwdown-contents-title'>Emergency
                  <ul className='dropdown-contents-items'>
                    {emergency.map(({id, title, link}) => 
                      <li className='fad' key={id}>{title}
                        <KeyboardArrowRightIcon className='nav-icon' />
                      </li>
                    )}
                  </ul>
                </h4>
              </div>
            </div>
          )}
        </div>

        <div className="sign">
          <Link to='/signin'>
            <button className="button sign-in">Sign in</button>
          </Link>
          <Link to='/signup'>
            <button className="button sign-up">Sign up</button>
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
