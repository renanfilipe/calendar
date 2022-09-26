import { useCallback } from "react";
import { useDispatch } from "react-redux";

import getWeatherByDate from "api/getWeatherByDate";
import { toast } from "components/shared/Toast/Toast";

import constants from "./constants";
import { buildReminder, transformDataForFE } from "./utils";

function useCalendarActions() {
  const dispatch = useDispatch();

  const setActiveDay = useCallback(
    (payload) => {
      dispatch({ type: constants.SET_ACTIVE_DAY, payload });
    },
    [dispatch]
  );

  const addReminder = useCallback(
    (payload, onSuccess, onFailure) => {
      dispatch(
        fetchWeather({
          payload,
          onSuccess,
          onFailure,
          action: constants.ADD_REMINDER,
        })
      );
    },
    [dispatch]
  );

  const editReminder = useCallback(
    (payload, onSuccess, onFailure) => {
      dispatch(
        fetchWeather({
          payload,
          onSuccess,
          onFailure,
          action: constants.EDIT_REMINDER,
        })
      );
    },
    [dispatch]
  );

  function fetchWeather({ payload, onSuccess, onFailure, action }) {
    return (dispatch) => {
      dispatch({ type: constants.IS_LOADING_WEATHER });

      getWeatherByDate(payload)
        .then((response) => {
          const data = transformDataForFE(response, payload);
          dispatch({
            type: action,
            payload: buildReminder(data),
          });
        })
        .then(onSuccess)
        .catch((error) => {
          toast("Something went wrong", { type: "error" });

          if (onFailure) {
            onFailure(error);
          }
        })
        .finally(() => {
          dispatch({ type: constants.IS_LOADING_WEATHER_DONE });
        });
    };
  }

  const removeReminder = useCallback(
    (payload) => {
      dispatch({
        type: constants.REMOVE_REMINDER,
        payload: buildReminder(payload),
      });
    },
    [dispatch]
  );

  return {
    setActiveDay,
    addReminder,
    editReminder,
    removeReminder,
  };
}

export default useCalendarActions;
