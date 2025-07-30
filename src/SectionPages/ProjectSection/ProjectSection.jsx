import React from 'react'
import "./ProjectSection.css"
import portfolioData from '../../data/portfolioData.json'
import { Link } from 'react-router-dom'

import ProjectCartSection from '../../components/Projects/ProjectCartSection'

function ProjectSection() {
  return (
    <div
        className="project-page d-flex justify-content-center align-items-center flex-column p-5"
        style={{ marginBottom:'100px',margin:'auto' }}
      >
        <div data-aos="fade-up">
          <h1 className="project-head text-center" style={{ color: "var(--section-heading)",marginTop:'200px ',marginBottom:'100px' }}>
            Projects
          </h1>
        </div>
        <div
          className="project-carts d-flex flex-wrap justify-content-center gap-5"
          style={{width:'100%' }}
        >
          <div className='d-flex flex-column gap-5' >
          {portfolioData.projects.map((project,index) =>{
            return <ProjectCartSection key={index} project={project}/>
          })}
          </div>
          <div>

          </div>
          
          
          
        </div>
      </div>
  )
}

export default ProjectSection
