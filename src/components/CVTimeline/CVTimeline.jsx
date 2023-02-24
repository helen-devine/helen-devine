import "../CVTimeline/CVTimeline.css";
import timelinedata from "../CVTimeline/timelinedata";
import CVTimelineItem from "../CVTimeline/CVTimelineItem";

const CVTimeline = () =>
  timelinedata.length > 0 && (
    <div className="timeline-container">
      {timelinedata.map((data, index) => (
        <CVTimelineItem data={data} key={index} />
      ))}
    </div>
  );

export default CVTimeline;
