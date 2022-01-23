import React, { Fragment } from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import "../Appointment/styles.scss"

export default function Appointment(props) {
  const { time, interview } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = usesVisualMode(interview ? SHOW : EMPTY);

  const formatAppointments = () => {
    return time ? `Appointment at ${time}` : `No Appointments`;
  }
  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? <Show student={interview.student} interviewer={interview.interviewer} /> : <Empty />}
    </article>
  );
}