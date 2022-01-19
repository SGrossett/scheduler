import React from "react";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewList(props) {
  const interviewList = props.interviewers.map((interviewer) => {
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name} 
      avatar={interviewer.spots}
      selected={interviewer.id === props.interviewer}
      setInterviewer={props.setInterviewer}  
    />
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewList}</ul>
    </section>
  );
}
