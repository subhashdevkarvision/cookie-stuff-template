import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
};
export const fetchCart = createAsyncThunk("fcart/etchCart", async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/courses/cart`
  );
  return res.data.cartData;
});
export const addToCartApi = createAsyncThunk(
  "cart/addToCart",
  async ({ id }, { dispatch }) => {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/courses/add-to-cart`,
      {
        courseId: id,
      }
    );
    dispatch(fetchCart());
  }
);
export const increamentCartApi = createAsyncThunk(
  "cart/increament",
  async (courseId, { dispatch }) => {
    await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/courses/increament/${courseId}`
    );
    dispatch(fetchCart());
  }
);
export const decreamentCartApi = createAsyncThunk(
  "cart/decreament",
  async (courseId, { dispatch }) => {
    await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/courses/decreament/${courseId}`
    );
    dispatch(fetchCart());
  }
);
export const removeFromCartApi = createAsyncThunk(
  "cart/removeCartItem",
  async (id, { dispatch }) => {
    await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/courses/remove/${id}`
    );
    dispatch(fetchCart());
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  },
});

export default cartSlice.reducer;
