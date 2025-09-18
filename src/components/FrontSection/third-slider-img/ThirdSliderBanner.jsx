import React from "react";
import "./thirdSliderBanner.css";

const ThirdSliderBanner = () => {
  return (
    <section className="third-banner">
      <h1>
        <span className="highligth">Gaint Strawberry</span>
        <br />
        Workshop
      </h1>
      <h2>Coming Soon</h2>

      <p>10+ Recipes</p>
      <div className="accessGroup">
        <span id="lifetime">Lifetime access</span>
        <span id="videos">Videos</span>
        <span id="pdf">PDF</span>
      </div>
    </section>
  );
};

export default ThirdSliderBanner;
