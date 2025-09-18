import React from "react";
import { FerturedFood } from "../../Data/DataArray";
import Card from "../Card/Card";
import "./feartureSection.css";

const Fearture = () => {
  //   console.log(food);
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
      <div className="cardContainer flex-center">
        {FerturedFood.length !== 0 &&
          FerturedFood.map((item, index) => (
            <Card key={index} foodItem={item}></Card>
          ))}
      </div>
    </div>
  );
};

export default Fearture;
