import React from "react";
import { checkVisibility } from "../VisibilityChecker";
import { translate } from "../Translate";

const CVTimelineItem = ({ data, language }) => {
  let currentLanguage = language;

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
        <span className="date">{translate(data.date, currentLanguage)}</span>
        <h3 className="cvtitle">{translate(data.title, currentLanguage)}</h3>
        <h4 className="location">
          <i>{translate(data.location, currentLanguage)}</i>
        </h4>
        <p className="description">
          {translate(data.description, currentLanguage)}
        </p>
        {data.url && (
          <a
            className="view-certificate"
            rel="noreferrer"
            target="_blank"
            href={data.url}>
            {language === "en" ? "View Certificate" : "Certificaat Bikijken"}
          </a>
        )}
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default CVTimelineItem;
