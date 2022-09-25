import omit from "lodash/omit";

import constants from "./constants";

const defaultState = {
  activeDay: "",
  reminders: {
    "2022-0-3": {
      8: [
        {
          id: "2022-0-3 8:00 1",
          content: "2022-0-3 8:00 1",
          city: "Washington",
          date: "2022-0-3-8",
        },
        {
          id: "2022-0-3 8:00 2",
          content: "2022-0-3 8:00 2",
          city: "Washington",
          date: "2022-0-3-8",
        },
      ],
      9: [
        {
          id: "2022-0-3 9:00 1",
          content: "2022-0-3 9:00 1",
          city: "New York",
          date: "2022-0-3-9",
        },
      ],
      10: [
        {
          id: "2022-0-3 10:00 1",
          content: "2022-0-3 10:00 1",
          city: "Salem",
          date: "2022-0-3-10",
        },
        {
          id: "2022-0-3 10:00 2",
          content: "2022-0-3 10:00 2",
          city: "Salem",
          date: "2022-0-3-10",
        },
      ],
    },
    "2022-0-5": {
      11: [
        {
          id: "2022-0-5 11:00 1",
          content: "2022-0-5 11:00 1",
          city: "Washington",
          date: "2022-0-5-11",
        },
      ],
      14: [
        {
          id: "2022-0-5 14:00 1",
          content: "2022-0-5 14:00 1",
          city: "New York",
          date: "2022-0-5-14",
        },
      ],
      18: [
        {
          id: "2022-0-5 18:00 1",
          content: "2022-0-5 18:00 1",
          city: "Salem",
          date: "2022-0-5-18",
        },
      ],
    },
  },
};

function calendar(state = defaultState, { type, payload }) {
  const { date, hour, data } = payload || {};
  const { id } = data || {};

  switch (type) {
    case constants.SET_ACTIVE_DAY:
      return {
        ...state,
        activeDay: payload,
      };
    case constants.ADD_REMINDER:
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
    case constants.EDIT_REMINDER:
      return {
        ...state,
        reminders: {
          ...state.reminders,
          [date]: {
            ...state.reminders[date],
            [hour]: state.reminders[date][hour].map((item) => {
              if (item.id === id) {
                return data;
              }
              return item;
            }),
          },
        },
      };
    case constants.REMOVE_REMINDER:
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
            [hour]: state.reminders[date][hour].filter(
              (item) => item.id === id
            ),
          },
        },
      };
    default:
      return state;
  }
}

export default calendar;
