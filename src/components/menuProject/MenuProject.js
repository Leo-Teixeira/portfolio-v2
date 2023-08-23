import React from "react";
import "./MenuProject.scss";

const MenuProject = ({ project, onClose }) => {
  return (
    <div className="menu-project">
      <div className="project-details">
        <h1>{project.projectName}</h1>
        {project.image && (
          <div className="project-image">
            <img src={project.image} alt={project.projectName} />
          </div>
        )}
        <p>{project.projectDesc}</p>
        {project.cardLanguage && (
          <div className="project-languages">
            <h3>Languages:</h3>
            <ul>
              {project.cardLanguage.map((link, i) => (
                <li key={i}>{link.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default MenuProject;
