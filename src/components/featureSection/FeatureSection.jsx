import React, { useEffect, useState } from "react";
import "./featureSection.css";
import axios from "axios";
import Card from "../card/Card";

const Fearture = () => {
  const [fertureItems, setFertureItems] = useState([]);
  const featureHandler = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/courses/`
      );
      if (response.data.success) {
        setFertureItems(response.data.coursesData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    featureHandler();
  }, []);
  return (
    <div id="featureBox">
      <div>
        <h3 className="sectionTitle">Featured</h3>
        <h4 className="subTitle">
          We Specialise in organising Professional
          <br />
          Traning Courses
        </h4>
      </div>
      <div className="cardContainer">
        {fertureItems.length !== 0 &&
          fertureItems.map(
            (item, index) =>
              item.category === "Featured" && (
                <Card key={index} foodItem={item}></Card>
              )
          )}
      </div>
    </div>
  );
};

export default Fearture;
