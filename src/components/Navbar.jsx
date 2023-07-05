import React, { useState } from "react";
import { Link } from "react-scroll";
import { translate } from "./Translate";
import "../components/Navbar.css";
function Navbar(props) {
  // makes nav stick to top of page while scrolling//

  let content = {
    interests: { en: "interests", nl: "interesses" },
  };

  let currentLanguage = props.language;

  const [isStickyNav, setStickyNav] = useState(false);

  const handleScrollEvent = () => {
    if (window.scrollY >= 80) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", handleScrollEvent);

  return (
    <nav
      className={
        isStickyNav ? "navbar navbar-scroll navbar-background-scroll" : "navbar"
      }>
      <div className="navbar-links">
        <Link to="about" spy={true} smooth={true} offset={-160} duration={500}>
          home
        </Link>
        <Link to="skills" spy={true} smooth={true} offset={-80} duration={500}>
          skills
        </Link>
        <Link to="cv" spy={true} smooth={true} offset={-80} duration={500}>
          cv
        </Link>
        <Link
          to="interests"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}>
          {translate(content.interests, currentLanguage)}
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
          contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
