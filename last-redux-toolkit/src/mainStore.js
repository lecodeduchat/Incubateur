import { configureStore } from "@reduxjs/toolkit";
import { cparSlice } from "@/redux/cpar";
import { cenfSlice } from "@/redux/cenf";

export const mainStore = configureStore({
  reducer: {
    Par: cparSlice.reducer,
    Enf: cenfSlice.reducer,
  },
});
