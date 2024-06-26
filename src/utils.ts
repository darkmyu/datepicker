import { ClassNames } from './types';

export function cn(...args: ClassNames[]) {
  return args
    .reduce<string[]>((acc, arg) => {
      if (typeof arg === 'string') {
        acc.push(arg);
      }

      if (typeof arg === 'object') {
        Object.keys(arg)
          .filter((key) => arg[key])
          .forEach((key) => {
            acc.push(key);
          });
      }
      return acc;
    }, [])
    .join(' ');
}

export function isSame(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isSameYear(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear();
}

export function isSameMonth(a: Date, b: Date) {
  return a.getMonth() === b.getMonth();
}

export function isSameDate(a: Date, b: Date) {
  return a.getDate() === b.getDate();
}

export function isEqualDay(target: Date, index: number) {
  return target.getDay() === index;
}

export function getDateArray(initialDate?: Date) {
  const now = new Date(initialDate ?? new Date());
  const firstDate = new Date(now.getFullYear(), now.getMonth());
  const lastDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const currentDates = Array.from(
    { length: lastDate.getDate() },
    (_, i) => new Date(now.getFullYear(), now.getMonth(), i + 1),
  );

  const prevDate = new Date(now.getFullYear(), now.getMonth(), 0);
  const prevDates = Array.from(
    { length: firstDate.getDay() },
    (_, i) => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - i),
  ).reverse();

  const nextDate = new Date(now.getFullYear(), now.getMonth() + 1);
  const nextDates = Array.from(
    { length: 6 - lastDate.getDay() },
    (_, i) => new Date(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate() + i),
  );

  return [...prevDates, ...currentDates, ...nextDates];
}
