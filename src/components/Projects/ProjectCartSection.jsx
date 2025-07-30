import "./ProjectCartSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { SkillCart1 } from "../Skills/SkillCart";

import { Link } from "react-router-dom";

function ProjectCartSection({ project }) {
  return (
    <div
      className="project d-flex  p-5"
      style={{
        
        borderRadius: "10px",
        justifyContent: "space-between",
      }}
      data-aos="fade-up"
    >
      <div className="project-card" style={{ width: "40%" }}>
        <img
          className="cart-img1"
          variant="top"
          src={project.img}
          alt="Project"
        />
      </div>
      <div className="cart-details " style={{ width: "50%"}}>
        <h1 >{project.title}</h1>
        <p>{project.description}</p>
        <div className="d-flex gap-3 flex-wrap">
          {project.technologies.map((tech, index) => {
            return <SkillCart1 key={index} skill={tech} />;
          })}
        </div>

        <div className="d-flex justify-content-start align-items-center mt-3 gap-2">
          <div className="d-flex gap-3">
            {[
              { icon: faGithub, label: "GitHub", url: project.GitHub },
              { icon: faEye, label: "Live", url: project.link },
            ].map(({ icon, label, url }, i) =>
              url ? (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-link d-flex align-items-center justify-content-center"
                  style={{
                    width: "150px",
                    marginTop: "10px",
                    color: "var(--hero-text)",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "25px", margin: "10px" }}
                    icon={icon}
                  />{" "}
                  {label}
                </a>
              ) : (
                <Link
                  key={i}
                  to="/404pagenotfound"
                  className="navbar-link d-flex align-items-center justify-content-center"
                  style={{
                    width: "150px",
                    marginTop: "10px",
                    color: "var(--hero-text)",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "25px", margin: "10px" }}
                    icon={icon}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  />{" "}
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCartSection;
