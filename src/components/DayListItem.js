import React from 'react';
import classNames from 'classnames';
import 'components/DayListItem.scss';

export default function DayListItem(props) {
  const { name, spots, setDay, selected } = props;
  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': selected,
    'day-list__item--full': spots === 0,
  });

  const formatSpots = () => {
    if (spots === 0) return 'no spots remaining';
    if (spots > 0)
      return `${spots}${spots === 1 ? ' spot' : ' spots'} remaining`;
  };

  return (
    <li
      data-testid="day-item"
      className={dayClass}
      onClick={() => setDay(name)}
    >
      <h2 className="text-regular">{name}</h2>
      <h3 className="text-light">{formatSpots(spots)}</h3>
    </li>
  );
}
