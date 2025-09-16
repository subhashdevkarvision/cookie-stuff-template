import React from "react";
import { freeReceips } from "../../dataArray/DataArray";
import Card from "../Card/Card";
import "./freeRecipes.css";
import ViewAllButton from "../viewAllButton/ViewAllButton";

const FreeRecipes = () => {
  return (
    <div className="recipeGroup">
      <h4 className="text-center sectionTitle">Free Recipes</h4>
      <div className="cardContainer flex-center">
        {freeReceips.length > 0 &&
          freeReceips.map((item, index) => (
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
