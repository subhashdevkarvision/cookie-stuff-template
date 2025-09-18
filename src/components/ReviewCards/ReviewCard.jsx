import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ user }) => {
  return (
    <div className="reviewCard">
      <div className="review-user flex">
        <img src={user.img} className="user-Img" alt="" />
        <div>
          <h3>{user.name}</h3>
          <div className="user-role">{user.role}</div>
        </div>
      </div>

      <h4>{user.title}</h4>
      <p>{user.text}</p>
      <div className="flex user-ratings">
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star"></i>
      </div>
    </div>
  );
};

export default ReviewCard;
