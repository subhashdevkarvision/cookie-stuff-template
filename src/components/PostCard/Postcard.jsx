import React from "react";
import "./postCard.css";
import { Link } from "react-router";

const Postcard = ({ post }) => {
  return (
    <div className="postCard">
      <img src={post.imgUrl} alt="" />
      <div className="postCardContainer">
        <span className="postTitle">{post.title}</span>
        <p className="postTime">{post.time}</p>
        <p className="postDescription">{post.description}</p>
        <Link to={`/posts/${post.id}`} state={{ post }}>
          <button className="postBtn flex">
            READ MORE <i className="bi bi-chevron-double-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Postcard;
