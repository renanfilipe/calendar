function getPreviousMonthDays(date) {
  const weekday = date.getDay();

  if (weekday === 0) {
    return [];
  }

  const millisecondsInADay = 86400000;
  const previousDays = [];

  for (let i = 1; i <= weekday; i++) {
    previousDays.push({
      isCurrentMonth: false,
      value: new Date(date - i * millisecondsInADay).getUTCDate(),
    });
  }

  return previousDays.reverse();
}

export default getPreviousMonthDays;
