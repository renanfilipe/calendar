import constants from "./constants";
import { removeReminder, addReminder } from "./utils";

const defaultState = {
  isLoadingWeather: false,
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
      return addReminder({ state, date, hour, data });
    case constants.EDIT_REMINDER:
      const [previousDate, previousHour] = id.split("_");
      const newState = removeReminder({
        state,
        date: previousDate,
        hour: previousHour,
        id,
      });
      return addReminder({ state: newState, date, hour, data });
    case constants.REMOVE_REMINDER:
      return removeReminder({ state, date, hour, id });
    case constants.IS_LOADING_WEATHER:
      return {
        ...state,
        isLoadingWeather: true,
      };
    case constants.IS_LOADING_WEATHER_DONE:
      return {
        ...state,
        isLoadingWeather: false,
      };
    default:
      return state;
  }
}

export default calendar;
