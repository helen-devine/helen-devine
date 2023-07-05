import CVTimeline from "./CVTimeline/CVTimeline";
import "../components/CV.css";
function CV({ language }) {
  return (
    <section className="CV" id="cv">
      <h2 className="sub-title">CV</h2>
      <CVTimeline language={language} />
    </section>
  );
}

export default CV;
