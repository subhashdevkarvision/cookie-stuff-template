import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
};
export const fetchCart = createAsyncThunk("fcart/etchCart", async () => {
  const res = await axios.get("http://localhost:4000/courses/cart");
  return res.data.cartData;
});
export const addToCartApi = createAsyncThunk(
  "cart/addToCart",
  async ({ id, qty }, { dispatch }) => {
    await axios.post("http://localhost:4000/courses/add-to-cart", {
      courseId: id,
      qty,
    });
    dispatch(fetchCart());
  }
);
export const increamentCartApi = createAsyncThunk(
  "cart/increament",
  async (id, { dispatch }) => {
    await axios.patch(`http://localhost:4000/courses/increament/${id}`);
    dispatch(fetchCart());
  }
);
export const decreamentCartApi = createAsyncThunk(
  "cart/decreament",
  async (id, { dispatch }) => {
    await axios.patch(`http://localhost:4000/courses/decreament/${id}`);
    dispatch(fetchCart());
  }
);
export const removeFromCartApi = createAsyncThunk(
  "cart/removeCartItem",
  async (id, { dispatch }) => {
    await axios.delete(`http://localhost:4000/courses/remove/${id}`);
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
