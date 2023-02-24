import React from "react";
import { checkVisibility } from "../VisibilityChecker";

import Slider from "../Slider/Slider";
const InterestsIndivItem = ({ data }) => {
  const [isVisible, setVisible] = React.useState(true);

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
        <h3 className="interests-title">{data.title}</h3>
        <p className="interests-paragraph">{data.description}</p>
      </div>
    </div>
  );
};

export default InterestsIndivItem;
