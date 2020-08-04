// import { INPUT_CHANGE, INPUT_CLEAR } from "../constants/formConstants";

// const initialState = "";

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case INPUT_CHANGE:
//       return action.payload;
//     case INPUT_CLEAR:
//       return "";
//     default:
//       return state;
//   }
// };

import { createReducer } from "@reduxjs/toolkit";
import { inputHandler, inputClear } from "../actions/formAction";

export default createReducer("", {
  // [inputHandler]: (state, action) => action.payload.target.value, // e.target.value
  [inputHandler]: (state, action) => action.payload,
  [inputClear]: (state, action) => "",
});
