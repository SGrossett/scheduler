import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";
import "../Appointment/styles.scss"

export default function Appointment(props) {
  const { time, interview, id, bookInterview, interviewers, cancelInterview } = props;
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    };

    bookInterview(id, interview)
    .then( () => transition(SHOW))
    .catch( (error) => console.log("Error:", error) );
  };

  const confirmDelete = () => transition(CONFIRM);

  const deleteAppointment = () => {
    transition(DELETING);

    cancelInterview(id)
    .then( () => transition(EMPTY) )
    .catch( (error) => console.log("Error:", error) );
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === SHOW && (
        <Show 
          id={id} 
          student={interview.student}
          interviewer={interview.interviewer}
          onDelete={confirmDelete}
          onEdit={() => transition(EDIT)}
        />)}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onCancel={() => back()}
          onSave={save} 
        />)}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onCancel={() => back()}
          onConfirm={deleteAppointment}
        />)}
      {mode === EDIT && (
        <Form
          student={interview.student}
          interviewer={interview.interviewer}
          interviewers={interviewers}
          onCancel={() => transition}
          onSave={save}
        />)}
    </article>
  );
}