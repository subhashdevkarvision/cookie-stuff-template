import React from "react";
import Navbar from "../components/navbar/Navbar";
import FrontSection from "../components/FrontSection/FrontSection";
import Fearture from "../components/FearturedSection/FeartureSection";
import FreeRecipes from "../components/FreeRecipes/FreeRecipes";
import HealthyRecipes from "../components/HealthyRecipes/HealthyRecipes";
import SliderSection from "../components/slider/slider";
import ReadPost from "../components/ReadPostsSection/ReadPost";
import ReviewSection from "../components/ReviewsSection/ReviewSection";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <SliderSection />
      <Fearture />
      <FreeRecipes />
      <HealthyRecipes />
      <ReadPost />
      <ReviewSection />
    </div>
  );
};

export default Home;
