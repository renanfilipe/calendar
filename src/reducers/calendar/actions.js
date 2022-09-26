import { useCallback } from "react";
import { useDispatch } from "react-redux";

import constants from "./constants";
import { buildReminder } from "./utils";

function useCalendarActions() {
  const dispatch = useDispatch();

  const setActiveDay = useCallback(
    (payload) => {
      dispatch({ type: constants.SET_ACTIVE_DAY, payload });
    },
    [dispatch]
  );

  const addReminder = useCallback(
    (payload) => {
      dispatch({
        type: constants.ADD_REMINDER,
        payload: buildReminder(payload),
      });
    },
    [dispatch]
  );

  const editReminder = useCallback(
    (payload) => {
      dispatch({
        type: constants.EDIT_REMINDER,
        payload: buildReminder(payload),
      });
    },
    [dispatch]
  );

  const removeReminder = useCallback(
    (payload) => {
      dispatch({
        type: constants.REMOVE_REMINDER,
        payload: buildReminder(payload),
      });
    },
    [dispatch]
  );

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
