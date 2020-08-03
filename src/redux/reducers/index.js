import { combineReducers } from "redux";
import count from "./counterReducer";
import input from "./formReducer";
import tasks from "./taskReducer";

const rootReducer = combineReducers({
  counter: count,
  input,
  tasks,
});

export default rootReducer;
