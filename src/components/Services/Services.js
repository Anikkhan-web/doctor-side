import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services ,setServices ]=useState([]);

    useEffect(()=>{

            fetch('./edudata.json')
            .then(res=>res.json())
            .then(data=>setServices(data))


    },[])


    return (
        <>
            
<br />
<br />
            <h1 className='text-center mt-5'>OUR DOCTORS</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {
                services.map(service=><Service
                key={service.id}

                    service={service}
                
                ></Service>)
            }
            
 
             </div>
            
             
        
             <br />
<br /><br />
<br /><br />
<br />
        </>
    );
};

export default Services;