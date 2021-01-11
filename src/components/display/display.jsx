import React from 'react'
import moment from 'moment'
import Button from '../button/button'

import './display.css'

const Display = ({ userInfo, worldInfo, handleToggle }) => {
  const time = moment(worldInfo.datetime).format('h:mm')
  const localTime = moment(worldInfo.datetime).format('LT')
  const greeting = localTime.includes('AM') ? 'Good morning' : 'Good evening';

  return (
    <section className="display-container">
      <div className="display">
        <h1 className="display__greeting"> {greeting}, IT’S CURRENTLY</h1>
        <h2 className="display__time">{time} {worldInfo.abbreviation}</h2>
        <p className="display__location">IN {userInfo.city}, {userInfo.country_code}</p>
      </div>
      <div className="display-btn">
        <button className="btn" onClick={handleToggle}>
          More
          </button>
      </div>
    </section>
  );
}

export default Display;