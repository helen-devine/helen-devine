import { useState } from "react";
import "../components/LanguageToggler.css";

function LanguageToggler(props) {
  //sticky scroller
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
      onClick={props.toggleLanguage}
      className={
        isStickyLangToggler ? "toggler-scroll-lang language" : "language"
      }>
      <span
        value="English"
        className={props.language === "en" ? "" : "unfocused"}>
        EN
      </span>
      <span
        value="Dutch"
        className={props.language === "nl" ? "" : "unfocused"}>
        NL
      </span>
    </div>
  );
}

export default LanguageToggler;
