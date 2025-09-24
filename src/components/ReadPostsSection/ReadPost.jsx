import React from "react";
import Postcard from "../PostCard/Postcard";
import "./ReadPost.css";
import { useSelector } from "react-redux";

const ReadPost = () => {
  const readPosts = useSelector((state) => state.postData);
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
