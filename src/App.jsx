import React from "react";
import Home from "./pages/Home";
import { Route, Routes, ScrollRestoration } from "react-router";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/ContactUs/ContactUs";
import ContactUsPage from "./pages/ContactPage";
import AllCourses from "./pages/AllCourses";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import GlobalContextProvider from "./GlobalContext/GlobalContextProvider";
import ScrollToTop from "./components/ScrollToTop";
import CourseDetails from "./pages/CourseDetails";

const App = () => {
  return (
    <>
      <GlobalContextProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<SinglePostPage />} />
        </Routes>
      </GlobalContextProvider>
    </>
  );
};

export default App;
