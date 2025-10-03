import React, { useEffect, useState } from "react";
import "./healthyRecipes.css";
import ViewAllButton from "../viewAllButton/ViewAllButton";
import axios from "axios";
import Card from "../card/Card";

const HealthyRecipes = () => {
  const [healthyRecipesItems, setHealthyRecipesItems] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/courses/`
      );
      if (res.data.success) {
        setHealthyRecipesItems(res.data.coursesData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="healthyRecipesBox">
      <h4 className="text-center sectionTitle">Healthy & Tasty Recipes</h4>
      <div className="cardContainer flex-center">
        {healthyRecipesItems.length > 0 &&
          healthyRecipesItems.map(
            (item, index) =>
              item.category === "HealthyRecepies" && (
                <Card key={index} foodItem={item} />
              )
          )}
      </div>
      <div className="flex-center viewAll">
        <ViewAllButton />
      </div>
    </div>
  );
};

export default HealthyRecipes;
