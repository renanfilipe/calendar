export function getReminders(day, month, year) {
  return ({ calendar }) => {
    const { reminders } = calendar;
    const wantedDay = reminders[`${year}-${month}-${day}`] || [];

    return Object.keys(wantedDay).reduce(
      (acc, key) => [...acc, ...wantedDay[key]],
      []
    );
  };
}
