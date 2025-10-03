import React, { useEffect, useState } from "react";
import "./freeRecipes.css";
import ViewAllButton from "../viewAllButton/ViewAllButton";
import axios from "axios";
import Card from "../card/Card";

const FreeRecipes = ({ backgroundColor }) => {
  const [freeReceipsItem, setFreeReceipsItem] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/courses/`
      );
      if (res.data.success) {
        setFreeReceipsItem(res.data.coursesData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ background: backgroundColor }} className={"recipeGroup"}>
      <h4 className="text-center sectionTitle">Free Recipes</h4>
      <div className="cardContainer flex-center">
        {freeReceipsItem.length > 0 &&
          freeReceipsItem.map(
            (item, index) =>
              item.category === "FreeRecepies" && (
                <Card foodItem={item} key={index} />
              )
          )}
      </div>
      <div className="flex-center viewAll">
        <ViewAllButton />
      </div>
    </div>
  );
};

export default FreeRecipes;
