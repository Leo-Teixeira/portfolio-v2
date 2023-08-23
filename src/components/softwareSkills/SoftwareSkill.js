import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <p>{skillsSection.subTitleLanguage}</p>
        <ul className="dev-icons">
          {skillsSection.softwareSkillsLanguage.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline center-content"
                name={skills.skillName}
              >
                {skills.fontAwesomeClassname ? (
                  <>
                    <i className={skills.fontAwesomeClassname}></i>
                    <p>{skills.skillName}</p>
                  </>
                ) : (
                  <>
                    {skills.languageImage && (
                      <img
                        src={skills.languageImage}
                        alt={skills.skillName}
                        // className="custom-image-class"
                      />
                    )}
                    <p>{skills.skillName}</p>
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <p>{skillsSection.subTitleFramework}</p>
        <ul className="dev-icons">
          {skillsSection.softwareSkillsFramework.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline center-content"
                name={skills.skillName}
              >
                {skills.fontAwesomeClassname ? (
                  <>
                    <i className={skills.fontAwesomeClassname}></i>
                    <p>{skills.skillName}</p>
                  </>
                ) : (
                  <>
                    {skills.languageImage && (
                      <img
                        src={skills.languageImage}
                        alt={skills.skillName}
                        // className="custom-image-class"
                      />
                    )}
                    <p>{skills.skillName}</p>
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <p>{skillsSection.subTitleBdd}</p>
        <ul className="dev-icons">
          {skillsSection.softwareSkillsBdd.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline center-content"
                name={skills.skillName}
              >
                {skills.fontAwesomeClassname ? (
                  <>
                    <i className={skills.fontAwesomeClassname}></i>
                    <p>{skills.skillName}</p>
                  </>
                ) : (
                  <>
                    {skills.languageImage && (
                      <img
                        src={skills.languageImage}
                        alt={skills.skillName}
                        // className="custom-image-class"
                      />
                    )}
                    <p>{skills.skillName}</p>
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <p>{skillsSection.subTitleOther}</p>
        <ul className="dev-icons">
          {skillsSection.softwareSkillsOther.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline center-content"
                name={skills.skillName}
              >
                {skills.fontAwesomeClassname ? (
                  <>
                    <i className={skills.fontAwesomeClassname}></i>
                    <p>{skills.skillName}</p>
                  </>
                ) : (
                  <>
                    {skills.languageImage && (
                      <img
                        src={skills.languageImage}
                        alt={skills.skillName}
                        // className="custom-image-class"
                      />
                    )}
                    <p>{skills.skillName}</p>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
