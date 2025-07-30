import React from 'react'
import './SkillCart.css'

function SkillCart({skill, image}) {
  return (
    <div className='skill-cart d-flex align-items-center px-4 py-2 gap-3' data-aos="zoom-in">
        <div>
            <img src={image} className='skill-image' alt={`${skill} icon`}/>
        </div>
        <div className='skillname'>
            <p className='m-0 p-0'>{skill}</p>
        </div>
    </div>
  )
}

export default SkillCart

export function SkillCart1({skill}){
  return (
    <div className='skill-cart d-flex align-items-center px-4 py-2 gap-3' data-aos="zoom-in">
        <div className='skillname'>
            <p className='m-0 p-0'>{skill}</p>
        </div>
    </div>
  )
}