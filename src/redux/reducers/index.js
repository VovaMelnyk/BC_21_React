import { combineReducers } from "redux";
import count from "./counterReducer";

const rootReducer = combineReducers({
  counter: count,
});

export default rootReducer;
