import React from 'react'
import './Location.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Location = () => {
  return (
    <div className='location'>
      <div className="location-map">
        <LocationOnOutlinedIcon className='location-icon'/>
        <p className='location-text'>Location</p>
      </div>
      <div className="location-input">
        <input type="text" placeholder='Search Doctors, Symptoms, Marketplaces, Listings, emergency etc' />
        <button className='location-submit' type="submit">Search</button>
      </div>
    </div>
  )
}

export default Location
