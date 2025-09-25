import React from "react";
import Card from "../Card/Card";
import "./freeRecipes.css";
import ViewAllButton from "../viewAllButton/ViewAllButton";
import { useSelector } from "react-redux";

const FreeRecipes = ({ backgroundColor }) => {
  const freeReceipsItem = useSelector((state) => state.freeReceips);
  return (
    <div style={{ background: backgroundColor }} className={"recipeGroup"}>
      <h4 className="text-center sectionTitle">Free Recipes</h4>
      <div className="cardContainer flex-center">
        {freeReceipsItem.length > 0 &&
          freeReceipsItem.map((item, index) => (
            <Card foodItem={item} key={index} />
          ))}
      </div>
      <div className="flex-center viewAll">
        <ViewAllButton />
      </div>
    </div>
  );
};

export default FreeRecipes;
