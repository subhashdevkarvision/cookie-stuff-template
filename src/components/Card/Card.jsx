import React from "react";
import "./card.css";

const Card = ({ foodItem }) => {
  return (
    <div id="card">
      <img src={foodItem.imgUrl} id="CardImg" alt={foodItem.title} />
      <div id="cardContentBox">
        <div className="cardTitle">{foodItem.title}</div>
        <div className="cardTitle">({foodItem.access})</div>
        <div id="starGroup" className="flex">
          <span>{foodItem.ratings}</span>
          <span className="bi bi-star-fill"></span>
          <span className="bi bi-star-fill"></span>
          <span className="bi bi-star-fill"></span>
          <span className="bi bi-star-fill"></span>
          <span className="bi bi-star"></span>
          <span id="ratingCount">({foodItem.ratingCounts})</span>
        </div>
        <div id="priceGroup" className="flex">
          <span>&#8377;{foodItem.discountedPrice}</span>
          <del>&#8377;{foodItem.price}</del>
        </div>
        {foodItem?.courseType && (
          <div className="badge text-center">{foodItem.courseType}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
