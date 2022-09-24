function getPreviousMonthDays(date) {
  const weekday = date.getDay();

  if (weekday === 0) {
    return [];
  }

  const millisecondsInADay = 86400000;
  const previousDays = [];

  for (let i = 1; i <= weekday; i++) {
    const previousDate = new Date(date - i * millisecondsInADay);
    previousDays.push({
      day: previousDate.getUTCDate(),
      month: previousDate.getUTCMonth(),
      year: previousDate.getUTCFullYear(),
      isCurrentMonth: false,
    });
  }

  return previousDays.reverse();
}

export default getPreviousMonthDays;
