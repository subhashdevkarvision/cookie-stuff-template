import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reduxSlices/featureSlices";
import cartReducer from "../reduxSlices/cartSlices";
import userReducer from "../reduxSlices/userSlice";

export const store = configureStore({
  reducer: { product: productReducer, cart: cartReducer, user: userReducer },
});
