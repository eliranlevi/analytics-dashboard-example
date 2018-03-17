import { createStore } from "redux";
import rootReducer from "../reducers";
import middlewares from "./middlewares";
import getPreloadedState from "./preloadedState";

const store = createStore(
  rootReducer,
  getPreloadedState(),
  middlewares,
);

export default store;