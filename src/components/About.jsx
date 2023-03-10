import React from "react";
import { checkVisibility } from "./VisibilityChecker";

import Pavel from "./SkillsImages/littlepavel.png";
import "../components/About.css";

function About() {
  const [isVisible, setVisible] = React.useState(true);

  const domRef = React.useRef();
  React.useEffect(() => {
    return checkVisibility(setVisible, domRef);
  }, []);

  return (
    <div className="About gradient-background" id="about">
      <div className="about-flex-container-title-paragraph">
        <h3
          ref={domRef}
          className={`about-title fade-in-title ${
            isVisible ? "is-visible" : ""
          }`}>
          Hello!
        </h3>
        <p
          ref={domRef}
          className={`about-paragraph fade-in-para ${
            isVisible ? "is-visible" : ""
          }`}>
          Welcome to my website! My name is Helen Devine and I am a front-end
          web developer with a background in architecture. I just love building
          digital spaces and being creative! If you're interested in learning
          more about me, you're in the right place. I am currently looking for
          new opportunities, so don't hesitate in contacting me.
        </p>
      </div>
      <div className="about-image">
        <img src={Pavel} alt="" />
      </div>
    </div>
  );
}

export default About;
