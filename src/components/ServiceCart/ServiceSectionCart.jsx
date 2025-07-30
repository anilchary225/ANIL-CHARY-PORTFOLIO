import React from 'react'

import './ServiceSectionCart.css'

function ServiceSectionCart({service}) {
  return (
    <div 
      className='service-cart text-center d-flex  justify-content-evenly p-5' 
     
      data-aos="zoom-in"
    >
      <div className='service-image-container d-flex align-items-center justify-content-center' >
        <img 
          className='service-img' 
          src={service.img}        
          
          alt={service.category}
        />
      </div>
      <div className='service-content d-flex flex-column align-items-start justify-content-evenly' >
        <h2 className='service-title' style={{fontWeight:'lighter'}}>{service.category}</h2>
        
        <ul className='service-list text-start m-3'>
          {Array.isArray(service.items) && service.items.map((item, index) => {
            return <li key={index} className='service-item'>{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default ServiceSectionCart