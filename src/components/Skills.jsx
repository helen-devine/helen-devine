import React from "react";
import { checkVisibility } from "./VisibilityChecker";
import skillsimagesdata from "../components/skillsimagesdata";
import "../components/Skills.css";

function Skills() {
  const [isVisible, setVisible] = React.useState(true);

  const domRef = React.useRef();
  React.useEffect(() => {
    return checkVisibility(setVisible, domRef);
  }, []);

  const SkillsMap = () =>
    skillsimagesdata.length > 0 && (
      <>
        {skillsimagesdata.map((props) => (
          <div>
            <img className="skill-img" src={props.src} alt={props.alt} />
          </div>
        ))}
      </>
    );

  return (
    <section className="Skills" id="skills">
      <h2 className="sub-title text-align-center">skills</h2>
      <div
        ref={domRef}
        className={`skills-container fade-in-skills-contact ${
          isVisible ? "is-visible" : ""
        }`}>
        <SkillsMap />
      </div>
    </section>
  );
}

export default Skills;
