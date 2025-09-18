import React from "react";
import liveImg from "../../../assets/liveImg.png";
import "./secondSliderBanner.css";

const SecondBanner = () => {
  return (
    <section className="second-banner">
      <div className="liveBadge">
        <img src={liveImg} alt="" />
      </div>
      <h1>
        <span className="">Variety of Juice</span>
        <br />
        Workshop
      </h1>
      <h2>6th - 10th June 12:00PM</h2>
      <h3>
        <span className="old-price">&#8377;5000 </span>{" "}
        <span className="new-price">&#8377;500 (Lifetime access)</span>
      </h3>
      <p>10+ Recipes</p>
      <div className="accessGroup">
        <span id="lifetime">Lifetime access</span>
        <span id="videos">Videos</span>
        <span id="pdf">PDF</span>
      </div>
    </section>
  );
};

export default SecondBanner;
