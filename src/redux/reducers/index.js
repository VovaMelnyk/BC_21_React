import { combineReducers } from "redux";
import input from "./formReducer";
import tasks from "./taskReducer";
import filterType from "./filterTypeReducer";

const rootReducer = combineReducers({
  input,
  tasks,
  filterType,
});

export default rootReducer;
