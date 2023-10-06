import { createSlice } from "@reduxjs/toolkit";

export const cenfSlice = createSlice({
  name: "Cenf",
  initialState: {
    count: 0,
  },
  reducers: {
    adder: (state, action) => {
      state.count += action.payload;
    },
  },
});
