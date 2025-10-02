import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import post1 from "../assets/postImg1.png";
import post2 from "../assets/postImg2.png";
import post3 from "../assets/postImg3.png";
import axios from "axios";

const initialState = {
  courses: [],
  postData: [
    {
      id: 1,
      imgUrl: post1,
      title: "Chef Cooking Life",
      time: "March 11, 2022 No Comments",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      id: 2,
      imgUrl: post2,
      title: "Cool way to cook food",
      time: "March 11, 2022 No Comments",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      id: 3,
      imgUrl: post3,
      title: "Make Spicy Food",
      time: "March 11, 2022 No Comments",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
  ],
};
export const fetchCourse = createAsyncThunk("fetch/courses", async () => {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/courses`);
  return res.data.coursesData;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourse.fulfilled, (state, action) => {
      state.courses = action.payload;
    });
  },
});

export default productSlice.reducer;
