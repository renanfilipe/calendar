import { combineReducers } from "redux";

import calendar from "./calendar/reducers";

const reducers = {
  calendar,
};

export default combineReducers(reducers);
