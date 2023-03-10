import { useState } from "react";
import "../components/LanguageToggler.css";
function LanguageToggler(props) {
  const [isStickyLangToggler, setStickyLangToggler] = useState(false);

  const handleScrollEvent = () => {
    if (window.scrollY >= 80) {
      setStickyLangToggler(true);
    } else {
      setStickyLangToggler(false);
    }
  };

  window.addEventListener("scroll", handleScrollEvent);

  return (
    <div
      onClick={props.toggleTheme}
      className={
        isStickyLangToggler ? "toggler-scroll-lang language" : "language"
      }>
      <span value="English" className="lang-toggler">
        EN
      </span>
      <span value="Dutch" className="lang-toggler unfocused">
        NL
      </span>
    </div>
  );
}

export default LanguageToggler;
