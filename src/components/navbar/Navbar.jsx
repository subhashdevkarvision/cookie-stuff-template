import React, { useState } from "react";
import logo from "../../assets/logo.png";
// import searchVector from "../../assets/search-Vector.png";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = ({ handleOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const products = useSelector((state) => state.products);

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
          {/* <img src={searchVector} className="searchIcon" alt="" /> */}
          <div className="cart-wrapper">
            <button
              onClick={handleOpen}
              className="bi bi-cart4 cart-icon"
            ></button>
            {products.length > 0 && (
              <span className="cart-badge">{products.length}</span>
            )}
          </div>
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
