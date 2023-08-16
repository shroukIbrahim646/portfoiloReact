import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer id="footer" className="footer-container" style={{ backgroundColor: '#050d18' }}>
      <div className="container">
        <h3></h3>
        <div className="social-links">
          <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="copyright">
          &copy; Copyright <strong><span>#</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;

