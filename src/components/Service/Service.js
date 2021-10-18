
import React, { useEffect, useState } from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Service = (props) => {
  const{name,image} = props.service;
const {id}=useParams();
const [data,setData] = useState([]);
useEffect(()=>{
  fetch('./edudata.json')
  .then(res=>res.json())
  .then(data=>setData(data))
},[])

const exactItem= data.filter(dt=>DataTransfer.id===id);
console.log(exactItem);
  console.log(name);
    // const {id}=props.service;

    // let { serviceId } = useParams();
    return (
  
      <div className="col">
    <div className="card h-100">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
 
 

    );
    
};
export default Service;