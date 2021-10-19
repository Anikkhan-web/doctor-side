
import React, { useEffect, useState } from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Service = (props) => {
  const{name,image,id} = props.service;


    return (
  
      <div className="col">
    <div className="card h-75">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <Link to={`/appointment/${id}`}>  <button>Appoinment</button></Link>
      </div>
      
    </div>
    
  </div>
 
 

    );
    
};
export default Service;