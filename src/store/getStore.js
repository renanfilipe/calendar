import debounce from "lodash/debounce";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import loadState from "./loadState";
import saveState from "./saveState";

const initialState = loadState();
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default function getStore(reducer) {
  const store = createStore(reducer, initialState, composedEnhancers);

  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );
  return store;
}
