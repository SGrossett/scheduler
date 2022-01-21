export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;
  const filteredAppointments = days.find((item) => item.name === day);

  if (days.length < 1 || filteredAppointments === undefined) {
    return [];
  }

  const results = filteredAppointments.appointments.map((id) => appointments[id]);
  return results;
};

export function getInterview(state, interview) {
  const { interviewers } = state;
  
  if (interview) {
    const interviewer = interviewers[interview.interviewer];
    return { student: interview.student, interviewer }
  }

  return null;
};