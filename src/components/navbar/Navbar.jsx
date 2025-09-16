import React, { useState } from "react";
import logo from "../../assets/logo.png";
import searchVector from "../../assets/search-Vector.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="navWrapper">
      <nav>
        <div className="nav-left">
          <img src={logo} className="logo" alt="" />
        </div>

        <ul className={`homeList${isOpen ? " show" : ""}`}>
          <li className="active">Home</li>
          <li>All Courses</li>
          <li>Contact Us</li>
          <li>Posts</li>
        </ul>

        <div className={`btns${isOpen ? " show" : ""}`}>
          <img src={searchVector} className="searchIcon" alt="" />
          <span>Sign In</span>
          <button className="signupBtn">Sign Out</button>
        </div>
        <div className="ham">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? "bi bi-x-lg" : "bi bi-list"}
          ></button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
