import React, { useState } from "react";
import { Link } from "react-scroll";
import "../components/Navbar.css";
function Navbar() {
  // makes nav stick to top of page while scrolling//
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
        <Link
          to="interests"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}>
          interests
        </Link>
        <Link to="cv" spy={true} smooth={true} offset={-80} duration={500}>
          cv
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
          contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
