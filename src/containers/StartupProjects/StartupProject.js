//testt
import React from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import Button from "../../components/button/Button";

export default function StartupProject() {
  const launchGithub = link => {
    window.open(link, "_blank");
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className={"dark-mode project-subtitle"}>{bigProjects.subtitle}</p>

          <div className="projects-container">
            {bigProjects.projects.map(project => (
              <div
                key={project.id}
                className={"dark-mode project-card project-card-dark"}
                onClick={() =>
                  project.linkGithub !== ""
                    ? launchGithub(project.linkGithub)
                    : null
                }
              >
                {project.image && (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    />
                  </div>
                )}
                <div className="project-detail">
                  <h5 className={"dark-mode card-title"}>
                    {project.projectName}
                  </h5>
                  <p className={"dark-mode card-subtitle"}>
                    {project.projectDesc}
                  </p>
                  {project.cardLanguage && (
                    <div className="project-card-footer">
                      {project.cardLanguage.map((link, i) => (
                        <p key={i} className={"dark-mode project-tag"}>
                          {link.name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="buttonGithub">
          <Button
            text="Voir plus de projet"
            href="https://github.com/lavaro883/"
            newTab={true}
          />
        </div>
      </div>
    </Fade>
  );
}
