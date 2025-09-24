import React from "react";
import "./viewAllButton.css";
import { Link } from "react-router";

const ViewAllButton = () => {
  return (
    <Link to={"/courses"}>
      <button className="viewAllButton flex">
        View All
        <span className="bi bi-arrow-right"></span>
      </button>
    </Link>
  );
};

export default ViewAllButton;
