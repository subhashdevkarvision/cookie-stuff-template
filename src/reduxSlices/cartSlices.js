import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
};
// export const fetchCart = createAsyncThunk("fetch/Cart", async () => {
//   const res = await axios.get(
//     `${import.meta.env.VITE_BACKEND_URL}/courses/cart`
//   );
//   return res.data.cartData;
// });
export const fetchUserCart = createAsyncThunk("fetch/userCart", async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.cartData;
});
export const addToCartApi = createAsyncThunk(
  "cart/addToCart",
  async ({ id }, { dispatch }) => {
    const token = JSON.parse(localStorage.getItem("token"));
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/cart/add-to-cart`,
      {
        courseId: id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch(fetchUserCart());
  }
);
export const increamentCartApi = createAsyncThunk(
  "cart/increament",
  async (courseId, { dispatch }) => {
    const token = JSON.parse(localStorage.getItem("token"));
    await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/cart/increament/${courseId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch(fetchUserCart());
  }
);
export const decreamentCartApi = createAsyncThunk(
  "cart/decreament",
  async (courseId, { dispatch }) => {
    const token = JSON.parse(localStorage.getItem("token"));
    await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/cart/decreament/${courseId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch(fetchUserCart());
  }
);
export const removeFromCartApi = createAsyncThunk(
  "cart/removeCartItem",
  async (id, { dispatch }) => {
    const token = JSON.parse(localStorage.getItem("token"));
    await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/cart/remove/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(fetchUserCart());
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  },
});
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
