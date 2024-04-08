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
