import React from 'react'
import { Link } from 'react-router-dom'
import './HeroPage.css'
import portfolioData from '../../data/portfolioData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';

function HeroPage() {
  return (
    <div className='hero-page d-flex flex-column justify-content-center align-items-center'data-aos="zoom-in">
      <h1 className='hero-head m-0 p-0'>{portfolioData.name}</h1>
      <p className='head-para p-0'>Welcome to my world of creativity and code — let’s build something amazing together!</p>
      <p className='head-para2 p-0'> {portfolioData.title}</p>
      <a  href="https://drive.google.com/file/d/17Eiz17qQNINSu8j8rR5JqwSDGEfzsfAY/view?usp=drive_link" className=" download" style={{ width: "600px", marginTop: "10px", color: "var(--hero-text)" }}>
      Resume Download
            </a>
      <div className='hero-social-logos d-flex justify-content-center align-items-center gap-2'>
        <div>
        <a href="https://github.com/anilchary225" target="_blank" className="navbar-link social-logo d-flex align-items-center justify-content-center" style={{ width: "50px", marginTop: "10px", color: "var(--hero-text)" }}>
        <FontAwesomeIcon style={{fontSize:'25px'}} icon={faGithub} />
            </a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/anilchary225/" target="_blank" className="navbar-link social-logo d-flex align-items-center justify-content-center" style={{ width: "50px", marginTop: "10px", color: "var(--hero-text)" }}>
        <FontAwesomeIcon style={{fontSize:'25px'}} icon={faLinkedin} />
            </a>
        </div>
        <div>
        <a href="https://www.instagram.com/__mr_charry__" target="_blank" className="navbar-link social-logo d-flex align-items-center justify-content-center" style={{ width: "50px", marginTop: "10px", color: "var(--hero-text)" }}>
        <FontAwesomeIcon style={{fontSize:'25px'}} icon={faInstagram} />
            </a>
        </div>

      </div>
    </div>
  )
}

export default HeroPage
