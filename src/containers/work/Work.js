import React from "react";
import "./Work.scss";
import WorkCard from "../../components/workCard/WorkCard";
import {work} from "../../portfolio";

export default function Work() {
  if (work.display) {
    return (
      <div className="work-section" id="experience">
        <h1 className="work-heading">{work.title}</h1>
        <div className="work-card-container">
          {work.work.map((work, index) => (
            <WorkCard key={index} work={work} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
