import { combineReducers } from "redux";
import input from "./formReducer";
import tasks from "./taskReducer";
import filterType from "./filterTypeReducer";
import loader from "./loaderReducer";
import error from "./errorReducer";

const rootReducer = combineReducers({
  input,
  tasks,
  filterType,
  loader,
  error,
});

export default rootReducer;
