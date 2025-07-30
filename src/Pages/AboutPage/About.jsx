import React from "react";
import "./About.css";

import portfolioData from '../../data/portfolioData.json'

function About() {
  return (
    <div className="about">
      <div className="about-page">
        <div className="about-image-container" data-aos="fade-right">
          <img 
            className="about-image" 
            src={portfolioData.profile} 
            alt="profile" 
          />
        </div>
        
        <div className="about-content" data-aos="fade-left">
          <div className="about-header">
            <h1 className="about-title">About me</h1>
          </div>
          <div className="about-para">
            <p><i>{portfolioData.summary}</i></p>
            <i>-{portfolioData.name}</i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;