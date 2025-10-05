import React from "react";
import Home from "./pages/Home";
import { Route, Routes, ScrollRestoration } from "react-router";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/contactUs/ContactUs";
import ContactUsPage from "./pages/ContactPage";
import AllCourses from "./pages/AllCourses";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import GlobalContextProvider from "./globalContext/GlobalContextProvider";
import ScrollToTop from "./components/ScrollToTop";
import CourseDetails from "./pages/CourseDetails";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/Footer";
import Layout from "./components/Layout";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./components/paymentForm/PaymentForm";
import PaymentPage from "./pages/PaymentPage";
import PaymentStatusPage from "./pages/PaymentStatusPage";

const App = () => {
  return (
    <>
      <GlobalContextProvider>
        <ScrollToTop />
        <Toaster />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<SinglePostPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-result" element={<PaymentStatusPage />} />
        </Routes>
      </GlobalContextProvider>
    </>
  );
};

export default App;
