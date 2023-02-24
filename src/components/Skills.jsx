import React from "react";
import { checkVisibility } from "./VisibilityChecker";

import "../components/Skills.css";

import Html5Logo from "../components/SkillsImages/HTML5_logo.svg";
import Css3Logo from "../components/SkillsImages/CSS3_logo.svg";
import JavaScriptLogo from "../components/SkillsImages/Javascript_logo2.svg";
import ReactLogo from "../components/SkillsImages/React-icon.svg";
import NodeJsLogo from "../components/SkillsImages/Node.js_logo.svg";
import AdobeCreativeCloudLogo from "../components/SkillsImages/Adobe_Creative_Cloud_icon.svg";

function Skills() {
  const [isVisible, setVisible] = React.useState(true);

  const domRef = React.useRef();
  React.useEffect(() => {
    return checkVisibility(setVisible, domRef);
  }, []);

  return (
    <section className="Skills" id="skills">
      <h2 className="sub-title text-align-center">skills</h2>
      <div
        ref={domRef}
        className={`skills-container fade-in-skills-contact ${
          isVisible ? "is-visible" : ""
        }`}>
        <div>
          <img className="skill-img" src={Html5Logo} alt="HTML5 Logo" />
        </div>
        <div>
          <img className="skill-img" src={Css3Logo} alt="CSS3 Logo" />
        </div>
        <div>
          <img className="skill-img" src={JavaScriptLogo} alt="CSS3 Logo" />
        </div>
        <div>
          <img className="skill-img" src={ReactLogo} alt="React Logo" />
        </div>
        <div>
          <img className="skill-img" src={NodeJsLogo} alt="Node.js Logo" />
        </div>
        <div>
          <img
            className="skill-img"
            src={AdobeCreativeCloudLogo}
            alt="Adobe Creative Cloud Logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
