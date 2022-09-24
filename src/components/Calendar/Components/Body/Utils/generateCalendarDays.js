import getNextMonthDays from "./getNextMonthDays";
import getPreviousMonthDays from "./getPreviousMonthDays";

function generateCalendarDays(month, year) {
  const date = new Date(year, month, 1);
  const lastMonthDayDate = new Date(year, month + 1, 0);
  const previousMonthDays = getPreviousMonthDays(date);
  const nextMonthDays = getNextMonthDays(lastMonthDayDate);
  const currentMonthDays = Array.from(
    { length: lastMonthDayDate.getUTCDate() },
    (_, i) => ({
      isCurrentMonth: true,
      value: i + 1,
    })
  );

  return [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
}

export default generateCalendarDays;
