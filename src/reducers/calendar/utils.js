export function buildReminder(payload) {
  const { date } = payload;
  const dateValue = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const hourValue = `${date.getHours()}`;

  return {
    date: dateValue,
    hour: hourValue,
    data: {
      ...payload,
      date: `${dateValue}-${hourValue}`,
    },
  };
}
