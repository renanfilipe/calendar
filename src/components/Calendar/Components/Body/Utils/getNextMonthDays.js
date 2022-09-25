function getNextMonthDays(date) {
  const weekday = date.getDay();

  if (weekday === 6) {
    return [];
  }

  const nextDays = [];
  for (let i = 1; i <= 6 - weekday; i++) {
    const nextDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + i
    );
    nextDays.push({
      day: nextDate.getDate(),
      month: nextDate.getMonth(),
      year: nextDate.getFullYear(),
      isCurrentMonth: false,
    });
  }

  return nextDays;
}

export default getNextMonthDays;
