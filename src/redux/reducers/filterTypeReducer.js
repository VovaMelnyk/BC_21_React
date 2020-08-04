import { createReducer } from "@reduxjs/toolkit";
import { changeType } from "../actions/filterTypeAction";

export default createReducer("All", {
  [changeType]: (state, { payload }) => payload,
});
