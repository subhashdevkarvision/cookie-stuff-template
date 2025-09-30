import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
// import searchVector from "../../assets/search-Vector.png";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../featuresSlice/cartSlices";

const Navbar = ({ handleOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <div id="navWrapper">
      <nav>
        <Link to={"/"}>
          <div className="nav-left">
            <img src={logo} className="logo" alt="" />
          </div>
        </Link>

        <ul className={`homeList${isOpen ? " show" : ""}`}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/courses"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              All Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact-us"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/posts"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Posts
            </NavLink>
          </li>
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
          <span onClick={() => navigate("/login")}>Sign In</span>
          <button onClick={() => navigate("/register")} className="signupBtn">
            Sign Up
          </button>
        </div>
        <div className="ham">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={
              isOpen ? "bi bi-x-lg text-black" : "bi bi-list text-black"
            }
          ></button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
