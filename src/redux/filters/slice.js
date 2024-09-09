import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  value: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { setFilterValue } = filtersSlice.actions;
