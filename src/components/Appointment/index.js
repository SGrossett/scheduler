import React from "react";
import "../Appointment/styles.scss"

export default function Appointment(props) {
  const { time } = props;

  const formatAppointments = () => {
    return time ? `Appointment at ${time}` : `No Appointments`;
  }
  return (
    <article className="appointment">{formatAppointments()}</article>
  );
}