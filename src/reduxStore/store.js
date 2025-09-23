import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../featuresSlice/featureSlices";

export const store = configureStore({
  reducer: productReducer,
});
