import React from "react";
import Postcard from "../postCard/Postcard";
import "./readPost.css";
import { useSelector } from "react-redux";

const ReadPost = () => {
  const readPosts = useSelector((state) => state.product.postData);
  return (
    <div className="readPost">
      <h3 className="sectionTitle">Read Our Post</h3>
      <h4 className="subTitle">
        We Specialise in organising Professional Traning Courses
      </h4>
      <div className="cardContainer flex-center">
        {readPosts.length > 0 &&
          readPosts.map((item, index) => <Postcard key={index} post={item} />)}
      </div>
    </div>
  );
};

export default ReadPost;
