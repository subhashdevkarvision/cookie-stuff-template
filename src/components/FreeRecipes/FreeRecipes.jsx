import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./freeRecipes.css";
import ViewAllButton from "../viewAllButton/ViewAllButton";
import axios from "axios";

const FreeRecipes = ({ backgroundColor }) => {
  const [freeReceipsItem, setFreeReceipsItem] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/courses/course");
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
