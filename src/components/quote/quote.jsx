import React from 'react'

import './quote.css'

const Quote = ({ quote, show }) => {
  return (
    <div className={show ? 'hide' : 'show quote-container'}>
      <p>
        <q>
          {quote.content}
        </q>
        <br />
        <strong> {quote.author} </strong>
      </p>
    </div>
  );
}

export default Quote;