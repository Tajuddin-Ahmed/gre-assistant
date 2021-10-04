import React from 'react';
import Service from '../Service/Service';
import { useState , useEffect } from 'react';
const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('./greContent.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    return (
        <div>
             <h2 className="text-3xl font-bold">OUR SERVICES</h2>
             <div className="grid grid-cols-3 gap-4">
                {
                services.map(service =><Service service={service} key={service.id}></Service>)
                }
             </div>
          
        </div>
    );
};

export default Services;