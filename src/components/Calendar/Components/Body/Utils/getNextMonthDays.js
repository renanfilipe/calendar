function getNextMonthDays(date) {
  const weekday = date.getDay();

  if (weekday === 6) {
    return [];
  }

  const nextDays = [];
  for (let i = 1; i <= 6 - weekday; i++) {
    nextDays.push({
      isCurrentMonth: false,
      value: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + i
      ).getUTCDate(),
    });
  }

  return nextDays;
}

export default getNextMonthDays;
