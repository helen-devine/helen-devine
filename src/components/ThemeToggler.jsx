import { useState } from "react";
import "../components/ThemeToggler.css";
function ThemeToggler(props) {
  const [isStickyToggler, setStickyToggler] = useState(false);

  const handleScrollEvent = () => {
    if (window.scrollY >= 80) {
      setStickyToggler(true);
    } else {
      setStickyToggler(false);
    }
  };

  window.addEventListener("scroll", handleScrollEvent);

  return (
    <div
      onClick={props.toggleTheme}
      className={isStickyToggler ? "toggler-scroll" : ""}>
      <div className="theme-toggler"></div>
      <div className="theme-toggler-circle"></div>
    </div>
  );
}

export default ThemeToggler;
