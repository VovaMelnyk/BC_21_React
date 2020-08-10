import { combineReducers } from "redux";
import input from "./formReducer";
import tasks from "./taskReducer";
import filterType from "./filterTypeReducer";
import loader from "./loaderReducer";
import error from "./errorReducer";
import user from "./userReducer";
import token from "./token";

const rootReducer = combineReducers({
  input,
  tasks,
  filterType,
  loader,
  error,
  user,
  token,
});

export default rootReducer;
