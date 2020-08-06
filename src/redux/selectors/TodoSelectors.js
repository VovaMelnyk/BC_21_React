import { createSelector } from "reselect";

export const taskSelector = (state) => state.tasks;

// export const tasksCountSelector = (state) => taskSelector(state).length;

export const tasksCountSelector = createSelector(
  taskSelector,
  (arr) => arr.length
);

// export const uncompletedTaskSelector = (state) =>
//   taskSelector(state).filter((task) => !task.status);

export const uncompletedTaskSelector = createSelector(taskSelector, (arr) =>
  arr.filter((el) => !el.status)
);

// export const countUncompletedTaskSelector = (state) =>
//   uncompletedTaskSelector(state).length;

export const countUncompletedTaskSelector = createSelector(
  uncompletedTaskSelector,
  (arr) => arr.length
);

// export const completedTaskSelector = (state) =>
//   taskSelector(state).filter((task) => task.status);

export const completedTaskSelector = createSelector([taskSelector], (arr) =>
  arr.filter((el) => el.status)
);

// export const countCompletedTaskSelector = (state) =>
//   completedTaskSelector(state).length;

export const countCompletedTaskSelector = createSelector(
  [completedTaskSelector],
  (arr) => arr.length
);
