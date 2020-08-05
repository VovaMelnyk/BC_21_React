import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SET_TASKS,
} from "../constants/taskConstant";
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

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});
