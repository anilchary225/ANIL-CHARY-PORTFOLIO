import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import portfolioData from "../../data/portfolioData.json";

function Footer() {
  return (
    <div
      className="footer"
      style={{  backgroundColor: "#18032a", marginTop: "auto" }}
    >
      <div
        className="footer-main-div text-white"
        style={{
          padding: "40px 0",
          display: "flex",
        }}
      >
        <div className="footer-div div1 d-flex">
          <div className="footer-main-content">
            <h1 className="footer-head">VADLA ANIL CHARY</h1>
          </div>
          <div className="social-div">
            <div className='d-flex justify-content-start align-items-start gap-2 social-icons'>
                    <div>
                    <a href="https://github.com/anilchary225" target="_blank" className="navbar-link d-flex align-items-center justify-content-center" style={{ width: "50px", marginTop: "10px", color: "var(--hero-text)" }}>
                    <FontAwesomeIcon className="social-icon" icon={faGithub} />
                        </a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/anilchary225/" target="_blank" className="navbar-link d-flex align-items-center justify-content-center" style={{ width: "50px", marginTop: "10px", color: "var(--hero-text)" }}>
                    <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                        </a>
                    </div>
                    <div>
                    <a href="https://www.instagram.com/__mr_charry__" target="_blank" className="navbar-link d-flex align-items-center justify-content-center" style={{ width: "50px", marginTop: "10px", color: "var(--hero-text)" }}>
                    <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                        </a>
                    </div>
                  </div>
                  <div className="details p-3" style={{ width: "100%"}}>
                    <p><b>Email:</b> {portfolioData.email}</p>
                    <p><b>Phone number:</b> {portfolioData.phone}</p>
                    <p><b>Address:</b> {portfolioData.address}</p>
                  </div>
          </div>
          
        </div>
        
        <div
          className="footer-div2 div23"
          style={{ display:'flex',margin:'2px' }}
        >
          <div className="footer-div1 div2" style={{display:'flex',flexDirection:'column'}}>
            

              <h4 className="list-items">
                <Link to="/" className="links"
                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Home
                </Link>
              </h4>
              <h4 className="list-items">
                <Link to="/services" className="links"
                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Services
                </Link>
              </h4>
              <h4 className="list-items">
                <Link to="/education" className="links"
                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Education
                </Link>
              </h4>
              <h4 className="list-items">
                <Link to="/projects" className="links"
                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Projects
                </Link>
              </h4>
              <h4 className="list-items">
                <Link to="/certificates" className="links"
                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Certificates
                </Link>
              </h4>
            
          </div>
          <div className="footer-div3 div3" style={{display:'flex',flexDirection:'column'}}>
            
              <h4 className="list-items">
                <Link to="/about" className="links"
                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  About me
                </Link>
              </h4>
              <h4 className="list-items">
                <Link to="/services" className="links"
                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Services
                </Link>
              </h4>
              <h4 className="list-items">
                <Link to="/contact" className="links"
                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Contact us
                </Link>
              </h4>
            
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Footer;