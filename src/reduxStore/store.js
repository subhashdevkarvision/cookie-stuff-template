import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../featuresSlice/featureSlices";
import cartReducer from "../featuresSlice/cartSlices";
export const store = configureStore({
  reducer: { product: productReducer, cart: cartReducer },
});
