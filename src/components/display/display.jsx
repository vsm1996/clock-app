import React from 'react'
import moment from 'moment'
import ArrowIcon from '../../assets/desktop/icon-arrow-up.svg'
import SunIcon from '../../assets/desktop/icon-sun.svg'
import MoonIcon from '../../assets/desktop/icon-moon.svg'

import './display.css'

const Display = ({ userInfo, worldInfo, show, handleToggle, isDay, dayPeriod }) => {

  const time = moment(worldInfo.datetime).format('h:mm')
  const timeIcon = isDay ? (
    <img src={SunIcon} alt="sun" className="display-icon display-icon__sun" />
  ) : (
      <img src={MoonIcon} alt="sun" className="display-icon display-icon__moon" />
    )

  return (
    <section className="display-container">
      <div className="display">
        <h1 className="display__greeting">
          {timeIcon}
          Good {dayPeriod} <span className="display-currently">, IT’S CURRENTLY </span>
        </h1>
        <h2 className="display__time">{time} <span className="font-light">{worldInfo.abbreviation}</span></h2>
        <p className="display__location">IN {userInfo.city}, {userInfo.country_code}</p>
      </div>

      <div className="display-btn">
        <button className="btn" onClick={handleToggle}>
          {show ? (<span>Less</span>) : <span>More</span>}
          <img src={ArrowIcon} alt="arrow" className={show ? 'display-arrow display-arrow-flip' : 'display-arrow'} />
        </button>
      </div>
    </section>
  );
}

export default Display;