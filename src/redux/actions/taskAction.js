import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../constants/taskConstant";

export const addTask = (task) => ({
  type: ADD_ITEM,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const editTask = (id) => ({
  type: EDIT_ITEM,
  payload: id,
});
