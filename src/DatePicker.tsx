import './global.scss';

import React, { useState } from 'react';
import { useDateArray } from './useDateArray';

interface Props {
  onChange: (date: Date) => void;
}

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

function DatePicker({ onChange }: Props) {
  const { dates } = useDateArray();

  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleClickDate = (date: number) => {
    const newDate = new Date(2024, 4, date);
    onChange(newDate);
    setSelectedDate(newDate);
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
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DatePicker;
