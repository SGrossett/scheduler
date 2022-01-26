import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { value, setDay } = props;
  const dayList = props.days.map((day) => (
    <DayListItem 
      key={day.id}
      name={day.name} 
      spots={day.spots} 
      selected={day.name === value}
      setDay={setDay}  
    />
  ));
  return dayList;
}