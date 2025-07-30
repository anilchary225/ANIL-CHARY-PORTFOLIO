import React from 'react'
import ContactPage from '../../Pages/ContactPage/ContactPage'
import portfolioData from '../../data/portfolioData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactSection.css'

function ContactSection() {
  return (
    <div className="contact-section d-flex flex-column justify-content-center align-items-center" style={{ color: "var(--form-color)"}}  data-aos="fade-up">
        <div className='contact-header m-5 d-flex flex-column justify-content-center align-items-center'>
        <h2>Get in Touch</h2>
        <p>Have a question, project idea, or just want to say hi? I'd love to hear from you!</p>
        </div>
        <div className='contact-info m-5 align-items-start d-flex flex-column justify-content-center'>
            <div className="contact-item">
                <p><FontAwesomeIcon className="contact-icon" icon={faEnvelope}/> <b>Email:</b> {portfolioData.email}</p>
            </div>
            <div className="contact-item">
                <p><FontAwesomeIcon className="contact-icon" icon={faPhone}/> <b>Phone:</b> {portfolioData.phone}</p>
            </div>
            <div className="contact-item">
                <p><FontAwesomeIcon className="contact-icon" icon={faAddressCard}/> <b>Address:</b> {portfolioData.address}</p>
            </div>
        </div>
      <div className='' style={{width:'80%'}}>
      <ContactPage/>
      </div>

      <div className='map-container'>
      <iframe
  src="https://www.google.com/maps?q=Akanpally,+Telangana&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
/>
      </div>
    </div>
  )
}

export default ContactSection