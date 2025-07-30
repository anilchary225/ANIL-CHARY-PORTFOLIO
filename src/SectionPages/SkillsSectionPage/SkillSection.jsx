import React from 'react'
import portfolioData from '../../data/portfolioData.json'
import SkillCartSection from '../../components/Skills/SkillCartSection'
import './SkillSection.css'

function SkillSection() {
  return (
    <div
        className="project-page d-flex justify-content-center align-items-center flex-column m-5"
        // style={{ height: "100vh" }}
      >
        <div data-aos="fade-up">
          <h1 className="text-center" style={{ color: "var(--section-heading)",marginTop:'200px ',marginBottom:'100px' }}>
            Certificates
          </h1>
        </div>
        <div
          className="project-carts d-flex flex-wrap justify-content-center gap-5"
          style={{ margin: "00px 0",width:'100%' }}
        >
          <div className='d-flex flex-column gap-5' style={{}}>
          {portfolioData.certifications &&
            portfolioData.certifications.titles &&
            portfolioData.certifications.images &&
            portfolioData.certifications.links &&
            portfolioData.certifications.titles.length === portfolioData.certifications.images.length &&
            portfolioData.certifications.images.length === portfolioData.certifications.links.length &&
            portfolioData.certifications.titles.map((title, index) => (
              <SkillCartSection key={index} title={title} image={portfolioData.certifications.images[index]} link={portfolioData.certifications.links[index]} />
          ))}
          </div>
          <div>

          </div>
          
          
          
        </div>
      </div>
  )
}

export default SkillSection
