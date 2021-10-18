import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
              <footer className="footer-59391">
        <div className="border-bottom pb-5 mb-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
              
              </div>
             
             
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
              <Link to="/" className="m-0 p-0 fs-1">Medi-Tech-Dental</Link>
            </div>
            <div className="col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0">
              <ul className="list-unstyled  nav-links m-0 nav-left">
                <li> <Link className="nav-link active" aria-current="page" to="/home">Home</Link></li>
                <li><Link className="nav-link" to="/services">Services</Link></li>
                <li><Link className="nav-link" to="/team">Team</Link></li>
                <li><Link className="nav-link" to="/gallery">Gallery</Link></li>
                <li><Link className="nav-link" to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="col-lg-4 text-lg-right order-3 order-lg-3">
              <p className="m-0 text-muted"><small>&copy; 2021. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>

    </footer>
        </div>
    );
};

export default Footer;