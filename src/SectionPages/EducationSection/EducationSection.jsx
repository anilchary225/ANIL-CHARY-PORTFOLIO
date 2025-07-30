import React from "react";
import "./EducationSection.css";
import portfolioData from "../../data/portfolioData.json";

function EducationSection() {
  return (
    <div
      className="EducationSection d-flex flex-column align-items-center justify-content-center"
      data-aos="fade-up"
      style={{ padding: "0 20px" }}
    >
      <div className="EducationSection-header">
        <h2 className="EducationSection-title">Graduated</h2>
      </div>
      <div
        className="photo d-flex justify-content-center"
        data-aos="zoom-in"
        style={{ padding: "20px" }}
      >
        <img
          className="EducationSection-image"
          src={portfolioData.graduateProfile}
          alt="profile"
        />
      </div>
      <div className="para quote-section">
        <p><i>"As a proud student of VJIT, my heart is filled with gratitude as I look back on the unforgettable memories, friendships, and lessons that shaped me — thank you, VJIT, for being more than just a college; you've been my second home."</i></p>
      </div>

      <div className="EducationSection-para para d-flex align-items-center flex-column mt-4" style={{ padding: "0px" }}>
        <div className="education-details">
          <h4>{portfolioData.education.graduation.degree}</h4>
          <h6>
            {portfolioData.education.graduation.institute},{" "}
            {portfolioData.education.graduation.location} ~
            <i>{portfolioData.education.graduation.duration}</i>
          </h6>
        </div>
        <div className="mt-5 group-image">
          <img src={portfolioData.graduatedGroup} alt="Graduated Group" />
        </div>
      </div>
      
      <div className="para content-section p-5 d-flex align-items-center justify-content-center flex-column">
        <p>
          <i>
            I'm recently graduated in Bachelor of Technology in Artificial
            Intelligence at Vidya Jyothi Institute of Technology (VJIT),
            Hyderabad (2021–2025). This academic journey has equipped me
            with a strong foundation in modern technologies like machine
            learning, deep learning, natural language processing, and
            full-stack development.
          </i>
        </p>
        <p><i>
        Beyond academics, my time at VJIT has been filled with valuable memories—from participating in national-level hackathons, cloud computing workshops, and IoT bootcamps to collaborating with peers on innovative projects. These experiences helped sharpen my problem-solving abilities and team collaboration skills. I've also taken part in college events and tech fests that encouraged creativity and leadership.</i></p>
        <p><i>"Graduation marks the end of a beautiful chapter. Thank you VJIT for all the memories, lessons, and lifelong friendships. ❤️🎓 #ForeverVJITian"</i></p>
      </div>
      
      <div className="group-image-2">
        <img src={portfolioData.graduatedGroupPic} alt="Graduated Group Picture" />
      </div>
      
      <div className="para final-quote m-5">
        <p><i>"College life ends, but the memories at VJIT live forever. Thank you for the ride! 🎓✨ #VJITLove"</i></p>
      </div>
      
      <div className="para signature m-5" data-aos="zoom-in">
        <i>-{portfolioData.name}</i>
      </div>
    </div>
  );
}

export default EducationSection;