import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../constants/taskConstant";
import { createAction } from "@reduxjs/toolkit";
// export const addTask = (task) => ({
//   type: ADD_ITEM,
//   payload: task,
// });

// export const deleteTask = (id) => ({
//   type: DELETE_ITEM,
//   payload: id,
// });

// export const editTask = (id) => ({
//   type: EDIT_ITEM,
//   payload: id,
// });

export const addTask = createAction(ADD_ITEM);
export const deleteTask = createAction(DELETE_ITEM);
export const editTask = createAction(EDIT_ITEM);
