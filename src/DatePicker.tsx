import './global.scss';

import React, { useState } from 'react';
import { getDateArray, isSame } from './utils';

interface Props {
  selected: Date;
  onChange: (date: Date) => void;
}

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

function DatePicker({ selected, onChange }: Props) {
  const dates = getDateArray();
  const [selectedDate, setSelectedDate] = useState(selected);
  const [selectedYear, setSelectedYear] = useState(selected.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(selected.getMonth());

  const handleClickDate = (date: Date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div className={'datepicker__container'}>
      <div className={'datepicker__header'}>
        <span>{'<'}</span>
        <span>{`${selectedYear}년 ${selectedMonth}월`}</span>
        <span>{'>'}</span>
      </div>
      <div className={'datepicker__dates'}>
        {DAYS.map((day) => (
          <div key={day} className={'datepicker__day'}>
            {day}
          </div>
        ))}
        {dates.map((date, index) => (
          <div
            key={index}
            className={`datepicker__date${isSame(date, selectedDate) ? ' datepicker__date_active' : ''}`}
            onClick={() => handleClickDate(date)}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DatePicker;
