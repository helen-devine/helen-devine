import React from "react";
import { checkVisibility } from "./VisibilityChecker";

import "../components/Contact.css";

import LinkedInIcon from "../components/SkillsImages/LinkedIn_icon_red.svg";
import EmailIcon from "../components/SkillsImages/email-icon.svg";
function Contact() {
  const [isVisible, setVisible] = React.useState(true);

  const domRef = React.useRef();
  React.useEffect(() => {
    return checkVisibility(setVisible, domRef);
  }, []);

  return (
    <section className="Contact" id="contact">
      <div className="sub-title">Contact</div>
      <div
        ref={domRef}
        className={`contact-links fade-in-skills-contact ${
          isVisible ? "is-visible" : ""
        }`}>
        <a
          href="https://www.linkedin.com/in/helen-devine-273392196/"
          target="_blank">
          <img className="contact-icon" src={LinkedInIcon} alt="" />
        </a>
        <a href="mailto: helenkdevine@gmail.com" target="_blank">
          <img className="contact-icon" src={EmailIcon} alt="" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
