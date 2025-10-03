import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CartModal from "../components/navbar/CartModal";
import axios from "axios";
import Card from "../components/card/Card";

const AllCourses = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/courses/`
      );
      if (res.data.success) {
        setProducts(res.data.coursesData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
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
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
