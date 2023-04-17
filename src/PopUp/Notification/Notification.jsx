import React from 'react'
import { Link } from 'react-router-dom'
import './Notification.css'

const Notification = ({setShowNotification}) => {
  return (
    <div className='notification-pop-up'>
        <div className="notification-pop-up-container">
            
            <div className="notification-logo">
                <Link to='/'>
                  <img src="/Icons/Cybalife-Logo.svg" alt="cybalife" className="logo" />
                </Link>
            </div>

            <h3 className='notification-title'>Cybalife would like to show you notifications for the latest news and trends</h3>

            <div className="notification-btns">
                <button onClick={() => setShowNotification(false)} className='notification-btn no-thanks' type="submit">No thanks</button>
                <button className='notification-btn allow' type="submit">Allow</button>
            </div>
        </div>

    </div>
  )
}

export default Notification
