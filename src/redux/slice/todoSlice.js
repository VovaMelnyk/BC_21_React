import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, { payload }) => [...state, payload],
    deleteTask: (state, { payload }) =>
      state.filter((task) => task.id !== payload),
    editTask: (state, { payload }) =>
      state.map((task) =>
        task.id !== payload ? task : { ...task, status: true }
      ),
  },
});

export const { addTask, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;

// export const tasks = (state) => state.tasks;
