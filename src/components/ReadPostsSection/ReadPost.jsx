import React from "react";
import postData from "../../dataArray/PostData";
import Postcard from "../PostCard/Postcard";
import "./ReadPost.css";

const ReadPost = () => {
  return (
    <div className="readPost">
      <h3 className="sectionTitle">Read Our Post</h3>
      <h4 className="subTitle">
        We Specialise in organising Professional Traning Courses
      </h4>
      <div className="cardContainer flex-center">
        {postData.length > 0 &&
          postData.map((item, index) => <Postcard key={index} post={item} />)}
      </div>
    </div>
  );
};

export default ReadPost;
