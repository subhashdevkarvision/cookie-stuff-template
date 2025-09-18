import React from "react";
import "./healthyRecipes.css";
import { food } from "../../data/DataArray";
import Card from "../Card/Card";
import ViewAllButton from "../viewAllButton/ViewAllButton";

const HealthyRecipes = () => {
  return (
    <div className="healthyRecipesBox">
      <h4 className="text-center sectionTitle">Healthy & Tasty Recipes</h4>
      <div className="cardContainer flex-center">
        {food.length > 0 &&
          food.map((item, index) => <Card key={index} foodItem={item} />)}
      </div>
      <div className="flex-center viewAll">
        <ViewAllButton />
      </div>
    </div>
  );
};

export default HealthyRecipes;
