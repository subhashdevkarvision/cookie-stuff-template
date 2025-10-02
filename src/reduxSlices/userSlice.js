import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("fetch/user", async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    return null;
  }
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/api/is-auth`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (res.data.success) {
    return res.data.userData;
  } else {
    return null;
  }
});
const userSlice = createSlice({
  name: "user",
  initialState: { userData: null },
  reducers: {
    logOut: (state) => {
      state.userData = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});
export const { logOut } = userSlice.actions;
export default userSlice.reducer;
