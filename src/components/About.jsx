import React from "react";
import { checkVisibility } from "./VisibilityChecker";
import { translate } from "./Translate";

import Pavel from "./SkillsImages/littlepavel.png";
import "../components/About.css";

function About(props) {
  let content = {
    title: { en: "Hello!", nl: "Hallo!" },
    paragraph: {
      en: `Welcome to my website! My name is Helen Devine and I am a front-end developer based in Rotterdam. I love building intuitive and engaging digital spaces and being creative! If you're interested in learning more about me, you're in the right place. I am currently looking for new opportunities, so don't hesitate in contacting me.`,
      nl: `Welkom op mijn website! Mijn naam is Helen Devine en ik ben een front-end developer in regio Rotterdam. Ik hou van bouwen van digital spaces een creëren! Als je geïnteresseerd bent om mij te leren kennen, ben je op de juiste plek. Momenteel ben ik op zoek naar een nieuwe baan, dus neem graag contact op`,
    },
  };

  let currentLanguage = props.language;

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
          {translate(content.title, currentLanguage)}
        </h3>
        <p
          ref={domRef}
          className={`about-paragraph fade-in-para ${
            isVisible ? "is-visible" : ""
          }`}>
          {translate(content.paragraph, currentLanguage)}
        </p>
      </div>
      <div className="about-image">
        <img src={Pavel} alt="" />
      </div>
    </div>
  );
}

export default About;
