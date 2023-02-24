import InterestsIndiv from "./Interests/InterestsIndiv";
import "../components/Interests.css";
function Interests() {
  return (
    <section className="Interests" id="interests">
      <h2 className="sub-title">My interests</h2>
      <InterestsIndiv />
    </section>
  );
}

export default Interests;
