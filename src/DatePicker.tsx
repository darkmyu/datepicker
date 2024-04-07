import './global.scss';

import React from 'react';
import { useDateArray } from './useDateArray';

interface Props {
  selected: Date;
  onChange: (date: Date) => void;
}

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

function DatePicker({ selected, onChange }: Props) {
  const { dates } = useDateArray();

  const handleClickDate = (date: Date) => {
    onChange(date);
  };

  return (
    <div className={'datepicker__container'}>
      <div className={'datepicker__dates'}>
        {DAYS.map((day) => (
          <div key={day} className={'datepicker__day'}>
            {day}
          </div>
        ))}
        {dates.map((date, index) => (
          <div key={index} className={'datepicker__date'} onClick={() => handleClickDate(date)}>
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DatePicker;
