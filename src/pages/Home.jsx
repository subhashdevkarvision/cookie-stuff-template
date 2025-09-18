import React from "react";
import Navbar from "../components/navbar/Navbar";
import Fearture from "../components/FearturedSection/FeartureSection";
import FreeRecipes from "../components/FreeRecipes/FreeRecipes";
import HealthyRecipes from "../components/HealthyRecipes/HealthyRecipes";
import SliderSection from "../components/slider/slider";
import ReadPost from "../components/ReadPostsSection/ReadPost";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import SwiperSlider from "../components/Swiper-slider/SwiperSlider";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
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
