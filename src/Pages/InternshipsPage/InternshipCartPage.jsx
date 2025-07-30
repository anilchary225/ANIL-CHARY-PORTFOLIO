import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";




function InternshipCartPage({ project }) {
  return (
    <div
      className="project d-flex  p-5"
      style={{
        width: "88rem",
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
        <div className="cart-details " style={{ width: "50%" }}>
        <h1>
          <b>{project.title}</b>
        </h1>
        <p>
          <b>{project.company}</b>
        </p>
        <p>
          <i>{project.duration}</i>
        </p>
        <ul>
          {project.details &&
            project.details.map((detail, index) => {
              return <li>{detail}</li>;
            })}
        </ul>
        
        
        <div className="d-flex justify-content-start align-items-center mt-3 gap-2">
          <div className="d-flex gap-3">
            {[
              { icon: faGithub, label: "GitHub", url: project.GitHub },
              { icon: faEye, label: "Certificate", url: project.link },
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

export default InternshipCartPage;
