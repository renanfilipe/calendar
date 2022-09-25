import omit from "lodash/omit";

import constants from "./constants";

const defaultState = {
  activeDay: undefined,
  reminders: {},
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
