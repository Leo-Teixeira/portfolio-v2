import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./WorkCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function WorkCard({work}) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const imgRef = createRef();

  const {isDark} = useContext(StyleContext);

  if (!work.logo)
    console.error(`Image of ${work.name} is missing in work section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="work-card">
          {work.logo && (
            <div className="work-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="work-roundedimg"
                src={work.logo}
                alt={work.workName}
              />
            </div>
          )}
          <div className="work-card-right">
            <h5
              className="work-text-school"
              onClick={() => openUrlInNewTab(work.linkWork)}
            >
              {work.workName}
            </h5>

            <div className="work-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode work-text-subHeader"
                    : "work-text-subHeader"
                }
              >
                {work.subHeader}
              </h5>
              <p className={`${isDark ? "dark-mode" : ""} work-text-duration`}>
                {work.duration}
              </p>
              <p className="work-text-desc">{work.desc}</p>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="work-card-border"></div>
      </Slide>
    </div>
  );
}
