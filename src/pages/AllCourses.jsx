import React from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";

const AllCourses = () => {
  const products = useSelector((state) => state.FerturedFood);
  return (
    <div>
      <Navbar />
      <div style={{ margin: "10rem 0" }}>
        <h1 style={{ textAlign: "center" }}>All Courses</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {products.length > 0 &&
            products.map((item, index) => <Card key={index} foodItem={item} />)}
          {products.length > 0 &&
            products.map((item, index) => <Card key={index} foodItem={item} />)}
          {products.length > 0 &&
            products.map((item, index) => <Card key={index} foodItem={item} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCourses;
