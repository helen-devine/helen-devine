import "../CVTimeline/CVTimeline.css";
import interestsdata from "./interestsdata";
import InterestsIndivItem from "./InterestsIndivItem";

const InterestsIndiv = () =>
  interestsdata.length > 0 && (
    <div>
      {interestsdata.map((data, index) => (
        <InterestsIndivItem data={data} key={index} />
      ))}
    </div>
  );

export default InterestsIndiv;
