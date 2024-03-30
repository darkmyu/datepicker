import './global.scss';

import React from 'react';

function DatePicker() {
  const currentDate = new Date();
  const firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth());
  const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const currentDates = Array.from({ length: lastDate.getDate() }, (_, i) => i + 1);

  const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  const prevDates = Array.from(
    { length: firstDate.getDay() },
    (_, i) => prevDate.getDate() - i,
  ).reverse();

  const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
  const nextDates = Array.from({ length: 6 - lastDate.getDay() }, (_, i) => nextDate.getDate() + i);

  return (
    <div className={'datepicker__container'}>
      {prevDates.map((date) => (
        <div key={date}>{date}</div>
      ))}
      {currentDates.map((date) => (
        <div key={date}>{date}</div>
      ))}
      {nextDates.map((date) => (
        <div key={date}>{date}</div>
      ))}
    </div>
  );
}

export default DatePicker;
