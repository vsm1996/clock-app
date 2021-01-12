import React from 'react'
import RefreshIcon from '../../assets/desktop/icon-refresh.svg'

import './quote.css'

const Quote = ({ quote, show, handleClick }) => {
  return (
    <section className={show ? 'hide' : 'show'}>
      <div className="quote-container">

        <p className="quote">
          <q>
            {quote.content}
          </q>
          <br />
          <span className="quote-author"> {quote.author} </span>
        </p>
        <button className="btn-refresh" onClick={handleClick}>
          <img src={RefreshIcon} alt="refresh" className="refresh-icon" />
        </button>
      </div>
    </section>
  );
}

export default Quote;