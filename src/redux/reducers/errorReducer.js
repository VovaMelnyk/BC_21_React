import { Switch } from "react-router-dom";

import { SET_ERROR, RESET_ERROR } from "../actions/errorActions";
const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case RESET_ERROR:
      return "";
    default:
      return state;
  }
};
