import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import "../Appointment/styles.scss"

export default function Appointment(props) {
  const { time, interview, id, bookInterview, interviewers } = props;
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    };

    bookInterview(id, interview)
    .then( () => transition(SHOW))
    .catch( (error) => console.log("Error:", error) );
  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer} />}
      {mode === CREATE && <Form interviewers={interviewers} onCancel={() => back()} onSave={save} />}
      {mode === SAVING && <Status />}
    </article>
  );
}