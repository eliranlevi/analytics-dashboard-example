import { combineReducers } from "redux";
import data from "./data";
import filter from "./filter";
import inactiveUsers from "./inactiveUsers";

const rootReducer = combineReducers({
  data,
  filter,
  inactiveUsers,
});

export default rootReducer;
