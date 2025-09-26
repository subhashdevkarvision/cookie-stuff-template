import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./feartureSection.css";
// import { useSelector } from "react-redux";
import axios from "axios";

const Fearture = () => {
  const [fertureItems, setFertureItems] = useState([]);
  // const fertureItems = useSelector((state) => state.FerturedFood);
  const featureHandler = async () => {
    try {
      const response = await axios.get("http://localhost:4000/courses/course");
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
