import InterestsIndiv from "./Interests/InterestsIndiv";
import "../components/Interests.css";
import { translate } from "./Translate";

function Interests({ language }) {
  let content = {
    subtitle: { en: "My Interests", nl: "Mijn Interesses" },
  };

  let currentLanguage = language;

  return (
    <section className="Interests" id="interests">
      <h2 className="sub-title">
        {translate(content.subtitle, currentLanguage)}
      </h2>
      <InterestsIndiv language={language} />
    </section>
  );
}

export default Interests;
