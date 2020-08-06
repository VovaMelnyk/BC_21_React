import { combineReducers } from "redux";
import input from "./formReducer";
import tasks from "./taskReducer";
import filterType from "./filterTypeReducer";
import loader from "./loaderReducer";
import error from "./errorReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  input,
  tasks,
  filterType,
  loader,
  error,
  user,
});

export default rootReducer;
