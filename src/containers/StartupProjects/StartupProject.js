//testt
import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  // if (!bigProjects.display) {
  //   return null;
  // }

  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [selectedProject, setSelectedProject] = useState(null);

  // const handleProjectClick = (project) => {
  //   setSelectedProject(project);
  // };

  // const handleSidebarClose = () => {
  //   setSelectedProject(null);
  // };

  const launchGithub = link => {
    window.open(link, "_blank");
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map(project => (
              <div
                key={project.id}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
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
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {project.projectName}
                  </h5>
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {project.projectDesc}
                  </p>
                  {project.cardLanguage && (
                    <div className="project-card-footer">
                      {project.cardLanguage.map((link, i) => (
                        <p
                          key={i}
                          className={
                            isDark ? "dark-mode project-tag" : "project-tag"
                          }
                        >
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
        {/* {selectedProject && (
          <div className="sidebar">
            <MenuProject
              project={selectedProject}
              onClose={handleSidebarClose}
            />
          </div>
        )} */}
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
