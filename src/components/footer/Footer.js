import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-logo">
        <SocialMedia />
      </div>
    </Fade>
  );
}
