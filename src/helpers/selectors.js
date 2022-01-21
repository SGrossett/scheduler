export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;
  const filteredAppointments = days.find((item) => item.name === day);

  if (days.length < 1 || filteredAppointments === undefined) {
    return [];
  }

  const results = filteredAppointments.appointments.map((id) => appointments[id]);
  return results;
};