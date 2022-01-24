export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;
  const filteredAppointments = days.find((item) => item.name === day);
  
  if (days.length < 1 || filteredAppointments === undefined) return [];

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

export function getInterviewersForDay(state, day) {
  const { days, interviewers } = state;
  const filteredInterviewers = days.find((item) => item.name === day);

  if (days.length < 1 || filteredInterviewers === undefined) return [];

  const results = filteredInterviewers.interviewers.map((id) => interviewers[id]);
  return results;
};