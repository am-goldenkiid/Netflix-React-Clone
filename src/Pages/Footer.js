import React from 'react';
import "../Footer.css"

function Footer() {
    var ddate = new Date();
    var year = ddate.getFullYear();
  return (
    <footer className="footer">
        <p className='copyright-text'>&copy;Copyright of Chris {year}</p>
    </footer>
  )
}

export default Footer