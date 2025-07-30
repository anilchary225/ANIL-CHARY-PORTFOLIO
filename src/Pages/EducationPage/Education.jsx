import React from 'react'
import './Education.css'
import portfolioData from '../../data/portfolioData.json'
import { Link } from 'react-router-dom'

function Education() {
  return (
    <div className='education'>
    <div
      className="education-page d-flex align-items-center justify-content-center"
      
    >
      
        
        
        <div className="education-content" data-aos="fade-right" >
        
       
        <div className="education-para" style={{ color:'white'}}>
            <h2 className="education-title text-white">Education</h2>
            <h4>{portfolioData.education.graduation.degree}</h4>
            <h6>{portfolioData.education.graduation.institute}, {portfolioData.education.graduation.location} ~<i>{portfolioData.education.graduation.duration}</i></h6>
            
            <ul>
                <li>Specialization in Artificial Intelligence</li>
                <li>Gained practical experience in full-stack web development, deep learning, and data analysis</li>
                <li>Developed academic projects integrating AI with real-world applications</li>
            </ul>
            
            <i>-{portfolioData.name}</i>
        </div>
          
        </div>
        <div className="education-image-container" data-aos="fade-left" >
            <img className='education-image' src={portfolioData.graduateProfile} alt="profile" width='400px' height='550px' />
        </div>
        </div>
      
    </div>
  )
}

export default Education
