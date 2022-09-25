import { useDispatch } from "react-redux";

import constants from "./constants";
import { buildReminder } from "./utils";

function useCalendarActions() {
  const dispatch = useDispatch();

  function setActiveDay(payload) {
    dispatch({ type: constants.SET_ACTIVE_DAY, payload });
  }

  function addReminder(payload) {
    dispatch({
      type: constants.ADD_REMINDER,
      payload: buildReminder(payload),
    });
  }

  function editReminder(payload) {
    dispatch({
      type: constants.EDIT_REMINDER,
      payload: buildReminder(payload),
    });
  }

  function removeReminder(payload) {
    dispatch({
      type: constants.REMOVE_REMINDER,
      payload: buildReminder(payload),
    });
  }

  function fetchCities(payload) {
    return (dispatch) => {};
  }

  return {
    setActiveDay,
    addReminder,
    editReminder,
    removeReminder,
    fetchCities,
  };
}

export default useCalendarActions;
