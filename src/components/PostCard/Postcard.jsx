import React from "react";
import "./postCard.css";

const Postcard = ({ post }) => {
  return (
    <div className="postCard">
      <img src={post.imgUrl} alt="" />
      <div className="postCardContainer">
        <span className="postTitle">{post.title}</span>
        <p className="postTime">{post.time}</p>
        <p className="postDescription">{post.description}</p>
        <button className="postBtn flex">
          READ MORE <i class="bi bi-chevron-double-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Postcard;
