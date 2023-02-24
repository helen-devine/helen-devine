import CVTimeline from "./CVTimeline/CVTimeline";
import "../components/CV.css";
function CV() {
  return (
    <section className="CV" id="cv">
      <h2 className="sub-title">CV</h2>
      <CVTimeline />
    </section>
  );
}

export default CV;
