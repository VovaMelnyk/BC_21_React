import { INPUT_CHANGE, INPUT_CLEAR } from "../constants/formConstants";
import { createAction } from "@reduxjs/toolkit";

// export const inputHandler = (e) => ({
//   type: INPUT_CHANGE,
//   payload: e.target.value,
// });

// export const inputClear = () => ({
//   type: INPUT_CLEAR,
// });

export const inputHandler = createAction(INPUT_CHANGE);
// export const inputHandler = createAction(INPUT_CHANGE, function convertEvent(
//   e
// ) {
//   return { payload: e.target.value };
// });
export const inputClear = createAction(INPUT_CLEAR);
