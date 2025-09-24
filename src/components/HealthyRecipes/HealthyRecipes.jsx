import React from "react";
import "./healthyRecipes.css";
import Card from "../Card/Card";
import ViewAllButton from "../viewAllButton/ViewAllButton";
import { useSelector } from "react-redux";

const HealthyRecipes = () => {
  const healthyRecipesItems = useSelector((state) => state.food);
  return (
    <div className="healthyRecipesBox">
      <h4 className="text-center sectionTitle">Healthy & Tasty Recipes</h4>
      <div className="cardContainer flex-center">
        {healthyRecipesItems.length > 0 &&
          healthyRecipesItems.map((item, index) => (
            <Card key={index} foodItem={item} />
          ))}
      </div>
      <div className="flex-center viewAll">
        <ViewAllButton />
      </div>
    </div>
  );
};

export default HealthyRecipes;
