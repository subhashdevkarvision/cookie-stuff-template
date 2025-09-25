import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import CartModal from "../components/navbar/CartModal";

const AllCourses = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const products = useSelector((state) => state.FerturedFood);
  return (
    <div>
      <Navbar handleOpen={handleOpen} />
      <CartModal open={open} handleClose={handleClose} />
      <div className="px-[4rem] md:px-[5.3rem]" style={{ margin: "10rem 0" }}>
        <h1 className="text-center text-4xl mb-10">All Courses</h1>
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
