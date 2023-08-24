import React from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {greeting} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={"dark-mode greeting-text"}> {greeting.title} </h1>
              <p className={"dark-mode greeting-text-p"}>{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Me contacter" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="Voir mon CV"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Avatar"
              src={require("../../assets/images/avatar.png")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
