
import './ProjectCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ProjectCart({project}) {
  return (
    <div className="project-card-container" data-aos="zoom-in">
      <div className="project-card-home">
        <img
          className="cart-img1"
          
          src={project.img}
          alt="Project"
        />
        <div className="layer overlay gap-3 d-flex flex-column align-items-center justify-content-end">
          <div className="project-card-links d-flex   gap-2">
            {[
                          { icon: faGithub,url: project.GitHub },
                          { icon: faLink, url: project.link },
                        ].map(({ icon, url }, i) =>
                          url ? (
            <a
              className="project-link github-link "
              key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
              aria-label="View GitHub Repository"
            >
              <FontAwesomeIcon 
              
              icon={icon}
            />{" "}
            
            </a>
                          ):(
                            <a
                            key={i}
                            href="/404pagenotfound"
                            target='_blank'
                            className="project-link github-link d-flex align-items-center justify-content-center"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                          >
                            <FontAwesomeIcon
                              style={{ fontSize: "25px", margin: "10px" }}
                              icon={icon}
                            />{" "}
                            
                          </a>
              )
            )}
          </div>
          <div className="project-text text-white p-5 text-center">
            <h4>{project.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCart;