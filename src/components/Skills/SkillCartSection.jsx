import React from "react";
import './SkillCartSection'
import { Link } from "react-router-dom";



function SkillCartSection({ title,image,link }) {
  return (
    <div
      className="project d-flex flex-column  p-5"
      style={{
        width: "88rem",
        height: "28rem",
        overflow:'hidden',
        borderRadius: "10px",
        justifyContent: "space-between",
      }}
      data-aos="fade-up"
    >
      <div
        className="project-card"
        style={{
          height: '100%',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <img
          className="cart-img1"
          variant="top"
          src={image}
          alt="Project"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            
            display: 'block'
          }}
        />
        {/* <div className="overlay gap-3 d-flex flex-column align-items-center justify-content-end">
          <div className="d-flex gap-4">
            <a
              className="link github-link"
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub Repository"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="link view-link"
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Live Project"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
          <div className="project-text text-white p-5 text-center">
            <h4>{project.title}</h4>
          </div>
        </div> */}
      </div>

      <div>
        <div className="d-flex justify-content-between align-items-center mt-5 gap-2">
            <div>
                <h4 className="">{title}</h4>
            </div>
          <div className="d-flex gap-3">
            <a
              href={link}
              target="_blank"
              className="navbar-link d-flex align-items-center justify-content-center"
              style={{
                width: "150px",
                marginTop: "10px",
                color: "var(--hero-text)",
              }}
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCartSection;
