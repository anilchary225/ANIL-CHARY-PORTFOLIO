import React from "react";
import "./AboutSection.css";

import portfolioData from '../../data/portfolioData.json'

function AboutSection() {
  return (
    <section className="AboutSection" style={{ minHeight: "100vh" }}>
    <div
      className="AboutSection-page d-flex flex-column align-items-center justify-content-center"
      style={{ padding: "100px 20px" }}
    >
      
        <div className="profile" data-aos="fade-up" style={{ padding: "20px" }}>
            <img className="AboutSection-image" src={portfolioData.profile} alt="profile" />
        </div>
        
        <div className="AboutSection-content" data-aos="zoom-in" style={{ padding: "20px" }}>
        <div className="AboutSection-header">
          <h1 className="AboutSection-title">About me</h1>
        </div>
        <div className="AboutSection-para" style={{ padding: "20px", color: "var(--AboutSection-text)"}}>
            <p><i>Hi, I'm Vadla Anil Chary, a Full Stack Developer and AI enthusiast, recently graduated with a B.Tech in Artificial Intelligence from Vidya Jyothi Institute of Technology, Hyderabad.</i></p>
           <p><i>Throughout my academic journey, I actively engaged in developing web and AI-based projects that reflect both technical depth and creativity. I gained hands-on experience in frontend and backend technologies like React.js, Node.js, Express, and MySQL, and explored Machine Learning through various internships and personal projects.</i></p>
          <p><i>College wasn't just about academics — it was a place where I grew both personally and professionally. From late-night coding marathons and hackathons to working on real-world projects and collaborating with peers, my days at VJIT were filled with learning, laughter, and meaningful memories. I'm especially proud of my contributions during workshops, group projects, and tech events that shaped my confidence and passion for tech.</i></p>
          <p><i>I strongly believe in continuous learning and am always eager to explore new technologies, solve real-world problems, and build solutions that create impact.</i></p>
          <i>-{portfolioData.name}</i>
        </div>
          
        </div>
        
      
    </div>
    </section>
  );
}

export default AboutSection;