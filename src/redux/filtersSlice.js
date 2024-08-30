import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { setNameFilter } = filtersSlice.actions;
// export const selectNameFilter = (state) => state.filter.name;
