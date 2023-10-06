import { createSlice } from "@reduxjs/toolkit";

export const cparSlice = createSlice({
  name: "Cpar",
  initialState: {
    question: "",
    reponse: "",
  },
  reducers: {
    sendQuestion: (state, action) => {
      state.question = action.payload;
    },
    sendReponse: (state, action) => {
      state.reponse = action.payload;
    },
  },
});
