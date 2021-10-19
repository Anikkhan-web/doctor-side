import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import useFirebase from '../../hooks/useFirebase';
// import useFirebase from '../../hooks/useFirebase';

const Header = () => {


  const {user,LogOut,exist}= useAuth();
    return (
        <div className='mb-5'>
            <nav className=" navbar navbar-expand-lg navbar-light fixed-top  bg-light">
  <div className="container">
    <a className="navbar-brand fs-1" href="/">Medi-Tech-Dental</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Doctors</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/team">Team</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/appointment">Appointment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
      <span className="navbar-text d-flex">
      <Link className="nav-link">{user?.displayName}</Link>
      
          {!user?.displayName || !exist ? 
          <Link className="nav-link" to="/login">Login</Link>
         
            
          


          
        :

        <Link className="nav-link" to="/home" onClick={LogOut}>Logout</Link>

      

          
          }
        
        
          <Link className="nav-link" to="/registration">Registration</Link>
        
     
      </span>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;