import React from 'react'

import './expanded.css'

const Expanded = ({ worldInfo }) => {
  return (
    <section className="expanded-container">
      <div className="column">
        <p className='world-item'>Current Timezone <span className="world-content">{worldInfo.timezone}</span></p>
        <p className='world-item'>Day of the Week <span className="world-content">{worldInfo.day_of_week}</span></p>
      </div>
      <hr />
      <div className="column">
        <p className='world-item'>Day of the Year <span className="world-content">{worldInfo.day_of_year}</span></p>
        <p className='world-item'>Week Number <span className="world-content">{worldInfo.week_number}</span></p>
      </div>
    </section>
  );
}

export default Expanded;