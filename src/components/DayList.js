import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {
  const { setDay } = props;
  const dayList = props.days.map((day) => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={setDay}
    />
  ));
  return dayList;
}
