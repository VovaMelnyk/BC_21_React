import { combineReducers } from "redux";
import count from "./counterReducer";
import input from "./formReducer";
// import tasks from "./taskReducer";
import tasks from "../slice/todoSlice";
// import filterType from "./filterTypeReducer";
import filterType from "../slice/filterTypeSlice";

const rootReducer = combineReducers({
  counter: count,
  input,
  tasks,
  filterType,
});

export default rootReducer;
