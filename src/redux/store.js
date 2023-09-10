import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [logger, thunk];

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

const expObj = {
  store,
};

export default expObj;
