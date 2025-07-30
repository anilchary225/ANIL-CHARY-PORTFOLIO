import React from "react";
import portfolioData from '../../data/portfolioData.json'
import ServiceSectionCart from "../../components/ServiceCart/ServiceSectionCart";
import './ServiceSection.css'

function ServiceSection() {
  return (
    <div
      className="service-section-container project-page d-flex justify-content-center align-items-center flex-column"
      
    >
      <div>
        <h1
          className="text-center m-5"
          style={{ color: "var(--section-heading)" }}
          data-aos="fade-up"
        >
          Services
        </h1>
      </div>
      <div
        className="service-carts-wrapper  d-flex flex-wrap justify-content-center gap-3"
        
      >
        {portfolioData.services.map((service, index) => {
          return <ServiceSectionCart key={index} service={service} />;
        })}
      </div>
    </div>
  );
}

export default ServiceSection;