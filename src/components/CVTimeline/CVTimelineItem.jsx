import React from "react";
import { checkVisibility } from "../VisibilityChecker";

const CVTimelineItem = ({ data }) => {
  const [isVisible, setVisible] = React.useState(true);

  const domRef = React.useRef();
  React.useEffect(() => {
    return checkVisibility(setVisible, domRef);
  }, []);

  return (
    <div
      ref={domRef}
      className={`timeline-item fade-in-cv-timeline ${
        isVisible ? "is-visible" : ""
      }`}>
      <div className="timeline-item-content">
        <span className="date">{data.date}</span>
        <h3 className="cvtitle">{data.title}</h3>
        <h4 className="location">
          <i>{data.location}</i>
        </h4>
        <p className="description">{data.description}</p>
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default CVTimelineItem;
