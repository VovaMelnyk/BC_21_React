import { createSlice } from "@reduxjs/toolkit";

const filterTypeSlice = createSlice({
  name: "filterType",
  initialState: "All",
  reducers: {
    changeType: (state, action) => action.payload,
  },
});

export const { changeType } = filterTypeSlice.actions;
export default filterTypeSlice.reducer;
