import React from 'react'
import InternshipCartPage from './InternshipCartPage' 
import portfolioData from '../../data/portfolioData.json'


function InternshipPage() {
  return (
    <div
    className="project-page d-flex justify-content-center align-items-center flex-column"
    style={{ marginBottom:'100px' }}
  >
    <div data-aos="fade-up">
      <h1 className="text-center" style={{ color: "var(--section-heading)",marginTop:'200px ',marginBottom:'100px' }}>
        Projects
      </h1>
    </div>
    <div
      className="project-cards d-flex flex-wrap justify-content-center gap-5"
      style={{ margin: "00px 0",width:'100%' }}
    >
      <div className='d-flex flex-column gap-5' style={{}}>
      {portfolioData.experience.map((exp,index) =>{
        return <InternshipCartPage key={index} project={exp}/>
      })}
      </div>
      <div>

      </div>
      
      
      
    </div>
  </div>
  )
}

export default InternshipPage
