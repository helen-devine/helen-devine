import "../CVTimeline/CVTimeline.css";
import interestsdata from "./interestsdata";
import InterestsIndivItem from "./InterestsIndivItem";

const InterestsIndiv = ({ language }) =>
  interestsdata.length > 0 && (
    <div>
      {interestsdata.map((data, index) => (
        <InterestsIndivItem language={language} data={data} key={index} />
      ))}
    </div>
  );

export default InterestsIndiv;
