import React from "react";
import "./frontSection.css";
import liveImg from "../../assets/liveImg.png";

const FrontSection = () => {
  return (
    <section>
      <div className="liveBadge">
        <img src={liveImg} alt="" />
      </div>
      <h1>
        Find Your&nbsp;
        <span className="hightlight">
          Favorite <br /> Food & Make Better <br />
        </span>
        Your Cooking
      </h1>
      <h2>10th - 20th May</h2>
      <div className="accessGroup">
        <span id="lifetime">Lifetime access</span>
        <span id="videos">Videos</span>
        <span id="pdf">PDF</span>
      </div>
    </section>
  );
};

export default FrontSection;
