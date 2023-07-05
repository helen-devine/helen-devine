import React from "react";
import { checkVisibility } from "../VisibilityChecker";

import Slider from "../Slider/Slider";
const InterestsIndivItem = ({ data, language }) => {
  const [isVisible, setVisible] = React.useState(true);

  function translate(text, language) {
    if (language === "nl") {
      return text.nl;
    }
    return text.en;
  }
  let currentLanguage = language;

  const domRef = React.useRef();
  React.useEffect(() => {
    return checkVisibility(setVisible, domRef);
  }, []);

  return (
    <div
      ref={domRef}
      className={`interests-indiv-item fade-in-interests ${
        isVisible ? "is-visible" : ""
      }`}>
      <Slider images={data.images} />
      <div className="interests-flex-container-title-paragraph">
        <h3 className="interests-title">
          {translate(data.title, currentLanguage)}
        </h3>
        <p className="interests-paragraph">
          {translate(data.description, currentLanguage)}
        </p>
      </div>
    </div>
  );
};

export default InterestsIndivItem;
