import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Fearture from "../components/FearturedSection/FeartureSection";
import FreeRecipes from "../components/FreeRecipes/FreeRecipes";
import HealthyRecipes from "../components/HealthyRecipes/HealthyRecipes";
import SliderSection from "../components/slider/slider";
import ReadPost from "../components/ReadPostsSection/ReadPost";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import SwiperSlider from "../components/Swiper-slider/SwiperSlider";
import CartModal from "../components/navbar/CartModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div id="home">
      <Navbar handleOpen={handleOpen} />
      <CartModal open={open} handleClose={handleClose} />
      <SliderSection />
      <Fearture />
      <FreeRecipes />
      <HealthyRecipes />
      <ReadPost />
      <SwiperSlider />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
