import React from "react";
import { Link } from "react-router-dom";

// import AnimationHomePage from '../components/AnimationHomePage/AnimationHomePage.jsx'
import "./Home.css";

import HeroPage from "../HeroPage/HeroPage";
import About from "../AboutPage/About";
import Education from "../EducationPage/Education";
import ProjectCart from "../../components/Projects/ProjectCart";
import SkillCart, { SkillCart1 } from "../../components/Skills/SkillCart";
import ServiceCart from "../../components/ServiceCart/ServiceCart";
import ContactPage from "../ContactPage/ContactPage";
import portfolioData from "../../data/portfolioData.json";


function Home() {
  
  
  return (
    
    <div className="home-page">
      
      <HeroPage />
      <About />
      <Education />
      {/* Project Cart */}
      <div
        className="project-page d-flex justify-content-center align-items-center flex-column"
        style={{marginTop:'100px' }}
      >
        <div data-aos="fade-up">
          <h1
            className="text-center m-5"
            style={{ color: "var(--section-heading)" }}
          >
            Projects
          </h1>
        </div>
        <div
          className="project-page d-flex flex-wrap justify-content-center gap-5"
          style={{ margin: "100px" }}
        >
          {portfolioData.projects.slice(0, 6).map((project, index) => {
            return <ProjectCart key={index} project={project} />;
          })}

          <div data-aos="fade-up">
            <Link
              to="/projects"
              className="viewmore-link text-center"
              style={{ marginTop: "10px" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              View all projects
            </Link>
          </div>
        </div>
      </div>
      {/* {Experience} */}
      <div
        className="project-page d-flex justify-content-center align-items-center flex-column"
        style={{marginTop:'100px' }}
      >
        <div data-aos="fade-up">
          <h1
            className="text-center m-5"
            style={{ color: "var(--section-heading)" }}
          >
            Experience
          </h1>
        </div>
        <div
          className="project-page d-flex flex-wrap justify-content-center gap-5"
          style={{ margin: "100px" }}
        >
          {portfolioData.experience.map((exp, index) => {
            return <ProjectCart key={index} project={exp} />;
          })}

          <div data-aos="fade-up">
            <p
              to="/projects"
              className="viewmore-link text-center"
              style={{ marginTop: "10px",visibility:'hidden' }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              
            </p>
          </div>
        </div>
      </div>
      
      {/* Skill Csrt */}
      <div
        className="project-page d-flex justify-content-center align-items-center flex-column gap-2 p-3"
        // style={{ height: "100vh",width:'80%',margin:"auto"}}
      >
        <div>
          <h1
            className="text-center m-5"
            style={{ color: "var(--section-heading)" }}
            data-aos="fade-up"
          >
            Skills
          </h1>
        </div>
        <div>
          <h3
            className="text-center "
            style={{ color: "var(--section-heading)" }}
            data-aos="fade-up"
          >
            Languages
          </h3>
        </div>
        <div
          className="project-carts d-flex flex-wrap justify-content-center gap-3"
          style={{ marginTop: "20px" }}
        >
          {portfolioData.skills.languages.map((language, index) => {
            return (
              <SkillCart
                key={index}
                skill={language}
                image={portfolioData.skills.langimg[index]}
              />
            );
          })}
        </div>
        <div >
          <h3
            className="text-center "
            style={{ color: "var(--section-heading)" }}
            data-aos="fade-up"
          >
            Frameworks
          </h3>
        </div>
        <div
          className="project-carts d-flex flex-wrap justify-content-center gap-3"
          style={{ marginTop: "20px" }}
        >
          {portfolioData.skills.frameworks.map((framework, index) => {
            return (
              <SkillCart
                key={index}
                skill={framework}
                image={portfolioData.skills.frameimg[index]}
              />
            );
          })}
        </div>
        <div>
          <h3
            className="text-center "
            style={{ color: "var(--section-heading)" }}
            data-aos="fade-up"
          >
            Databases
          </h3>
        </div>
        <div
          className="project-carts d-flex flex-wrap justify-content-center gap-3"
          style={{ marginTop: "20px" }}
        >
          {portfolioData.skills.databases.map((database, index) => {
            return (
              <SkillCart
                key={index}
                skill={database}
                image={portfolioData.skills.dataimg[index]}
              />
            );
          })}
        </div>
        <div>
          <h3
            className="text-center "
            style={{ color: "var(--section-heading)" }}
            data-aos="fade-up"
          >
            Tools
          </h3>
        </div>
        <div
          className="project-carts d-flex flex-wrap justify-content-center gap-3"
          style={{ marginTop: "20px" }}
        >
          {portfolioData.skills.tools.map((tool, index) => {
            return (
              <SkillCart
                key={index}
                skill={tool}
                image={portfolioData.skills.toolsimg[index]}
              />
            );
          })}
        </div>
        <div>
          <h3
            className="text-center "
            style={{ color: "var(--section-heading)" }}
            data-aos="fade-up"
          >
            Concepts
          </h3>
        </div>
        <div
          className="project-carts d-flex flex-wrap justify-content-center gap-3"
          style={{ marginTop: "20px" }}
        >
          {portfolioData.skills.concepts.map((concept, index) => {
            return <SkillCart1 key={index} skill={concept} />;
          })}
        </div>
      </div>
      {/* Service Card */}
      <div className="project-page d-flex justify-content-center align-items-center flex-column p-3">
        <div>
          <h1
            className="text-center m-5"
            style={{ color: "var(--section-heading)" }}
            data-aos="fade-up"
          >
            Services
          </h1>
        </div>
        <div className="project-page w-100 d-flex flex-wrap justify-content-center gap-3">
          {portfolioData.services.slice(0, 3).map((service, index) => {
            return <ServiceCart key={index} service={service} />;
          })}
          <div
            data-aos="fade-up"
            className="w-100 d-flex justify-content-center"
          >
            <Link
              to="/services"
              className="viewmore-link text-center"
              style={{ marginTop: "10px" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              View all services
            </Link>
          </div>
        </div>
      </div>
      {/* Contact page */}
      <div
        className="project-page d-flex justify-content-center align-items-center flex-column"
        style={{ height: "100vh" }}
      >
        <div>
          <h1 className="text-center m-5" style={{ color: "var(--section-heading)" }} data-aos="fade-up">
            Let's Start Conversation
          </h1>
        </div>
        <div
          className="project-carts d-flex flex-wrap justify-content-center gap-5"
          style={{ margin: "100px",width:'100%' }}
        >
          <div className="d-flex align-items-center justify-content-center" 
          style={{width:'80%'}}>
          <ContactPage/>
          </div>
          
          
        </div>
      </div>
      ;

    </div>
  );
}

export default Home;
