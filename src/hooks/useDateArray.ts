export function useDateArray() {
  const now = new Date();
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

  const dates = [...prevDates, ...currentDates, ...nextDates];

  return { dates };
}
