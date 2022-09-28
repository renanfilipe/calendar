import omit from "lodash/omit";

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

export function removeReminder({ state, date, hour, id }) {
  if (Object.keys(state.reminders[date]).length === 1) {
    return {
      ...state,
      reminders: omit(state.reminders, date),
    };
  }

  if (state.reminders[date][hour].length === 1) {
    return {
      ...state,
      reminders: {
        ...state.reminders,
        [date]: omit(state.reminders[date], hour),
      },
    };
  }

  return {
    ...state,
    reminders: {
      ...state.reminders,
      [date]: {
        ...state.reminders[date],
        [hour]: state.reminders[date][hour].filter((item) => item.id === id),
      },
    },
  };
}

export function addReminder({ state, date, hour, data }) {
  if (state.reminders[date]) {
    if (state.reminders[date][hour]) {
      return {
        ...state,
        reminders: {
          ...state.reminders,
          [date]: {
            ...state.reminders[date],
            [hour]: [
              ...state.reminders[date][hour],
              {
                ...data,
                id: `${date}_${hour}_${state.reminders[date][hour].length}`,
              },
            ],
          },
        },
      };
    }

    return {
      ...state,
      reminders: {
        ...state.reminders,
        [date]: {
          ...state.reminders[date],
          [hour]: [
            {
              ...data,
              id: `${date}_${hour}_0`,
            },
          ],
        },
      },
    };
  }

  return {
    ...state,
    reminders: {
      ...state.reminders,
      [date]: {
        [hour]: [
          {
            ...data,
            id: `${date}_${hour}_0`,
          },
        ],
      },
    },
  };
}
