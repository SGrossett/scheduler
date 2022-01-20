import React, { Fragment } from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import "../Appointment/styles.scss"

export default function Appointment(props) {
  const { time, interview } = props;

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