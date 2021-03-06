import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });
  
  // Make api requests when appointments are updated then reolve promise and update state
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  // Function to update the spots available
  const updateSpots = (add, remove) => {
    const updateCount = state.days.find((day) => day.name === state.day);
    const days = [...state.days];

    if (remove) { // Add a spot if appointment is cancelled
      updateCount.spots++;
    } else if (add) { // Remove a spot if appointment is added
      updateCount.spots--;
    }

    days[updateCount.id - 1] = updateCount; // Apply change to object
    return days;
  };

  // Sends a book appointment request to an api and updates state
  const bookInterview = (id, interview) => {
    const add = !state.appointments[id].interview;

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`api/appointments/${id}`, appointment)
      .then(() => setState({ ...state, appointments, days: updateSpots(add) }))
      .catch((error) => {
        console.log('book error:', error);
        throw error;
      });
  };

  // Sends a cancel request to the app and updates the state with null interview
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(`api/appointments/${id}`, appointment)
      .then(() =>
        setState({ ...state, appointments, days: updateSpots(null, true) })
      )
      .catch((error) => {
        console.log('delete errors:', error);
        throw error;
      });
  };

  return { state, setDay, bookInterview, cancelInterview, updateSpots };
}
