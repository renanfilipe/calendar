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

export function transformDataForFE(response, payload) {
  const { data } = response || {};
  const { days } = data || {};
  const [day] = days || [];
  const { description, conditions } = day || {};

  return {
    ...payload,
    weather: {
      description,
      conditions,
    },
  };
}
