import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={"dark-mode main"} id="skills">
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className={"dark-mode skills-heading"}>
              {skillsSection.title}{" "}
            </h1>
            <p className={"dark-mode subTitle skills-text-subtitle"}>
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
          </div>
        </Fade>
      </div>
    </div>
  );
}
