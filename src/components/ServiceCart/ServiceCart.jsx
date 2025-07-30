import './ServiceCart.css'
import { Link } from 'react-router-dom';
import React from 'react';

function ServiceCart({service}) {
  return (
    <div className='service-cart text-center d-flex flex-column justify-content-between' data-aos="zoom-in">
      <div className=''>
        <img 
          className='service-img' 
          src={service.img}        
          alt={`${service.category} service`}
        />
      </div>
      <div className='service-content d-flex flex-column justify-content-between'>
        <h2 className='service-title'>{service.category}</h2>
        
        <ul className='service-list'>
          {Array.isArray(service.items) && service.items.slice(0, 3).map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
        
        <div>
        <Link
          to="/"
          className="viewmore-link   text-center"
          style={{ marginTop: "20px",width:'60%' }}
        >
          Explore More
        </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCart;