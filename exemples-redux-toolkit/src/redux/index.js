import { configureStore, createSlice } from "@reduxjs/toolkit";

const comSlice = createSlice({
  name: "Com",
  initialState: {
    question: "",
    reponse: "",
  },
  reducers: {
    // action est un objet avec une propriété payload
    sendQuestion: (state, action) => {
      state.question = action.payload;
    },
    sendReponse: (state, action) => {
      state.reponse = action.payload;
    },
  },
});

export const mainStore = configureStore({
  reducer: {
    Com: comSlice.reducer,
  },
});
