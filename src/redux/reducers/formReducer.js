import { INPUT_CHANGE, INPUT_CLEAR } from "../constants/formConstants";

const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return action.payload;
    case INPUT_CLEAR:
      return "";
    default:
      return state;
  }
};
