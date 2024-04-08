import './global.scss';

import React, { useMemo, useState } from 'react';
import { cn, getDateArray, isEqualDay, isSame } from './utils';

interface Props {
  selected: Date;
  onChange: (date: Date) => void;
}

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

function DatePicker({ selected, onChange }: Props) {
  const [selectedDate, setSelectedDate] = useState(selected);
  const [selectedYear, setSelectedYear] = useState(selected.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(selected.getMonth());

  const dates = useMemo(
    () => getDateArray(new Date(selectedYear, selectedMonth)),
    [selectedYear, selectedMonth],
  );

  const handleClickDate = (date: Date) => {
    setSelectedDate(date);
    onChange(date);
  };

  const handleClickPrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
      return;
    }
    setSelectedMonth(selectedMonth - 1);
  };

  const handleClickNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
      return;
    }
    setSelectedMonth(selectedMonth + 1);
  };

  return (
    <div className={'datepicker__container'}>
      <div className={'datepicker__header'}>
        <span onClick={handleClickPrevMonth}>{'<'}</span>
        <span>{`${selectedYear}년 ${selectedMonth + 1}월`}</span>
        <span onClick={handleClickNextMonth}>{'>'}</span>
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
            className={cn('datepicker__date', {
              active: isSame(date, selectedDate),
              holiday: isEqualDay(date, 0),
            })}
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
