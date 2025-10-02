import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, fetchUserCart } from "../../reduxSlices/cartSlices";
import { fetchUser, logOut } from "../../reduxSlices/userSlice";
import toast from "react-hot-toast";

const Navbar = ({ handleOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.userData);
  const isAuth = Boolean(user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
    dispatch(fetchUserCart());
  }, [user]);

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
          {isAuth ? (
            <>
              {/* <span className="bg-[#F99106] text-white px-4 py-2 text-3xl rounded-full poppins-font">
                {userData.fullName.charAt(0).toUpperCase()}
              </span> */}
              <span className="bi bi-person-circle text-5xl text-[#F99106]"></span>
              <button
                onClick={() => {
                  dispatch(logOut());
                  dispatch(clearCart());
                  toast.success("Log Out successfully");
                }}
                className="signupBtn"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <span onClick={() => navigate("/login")}>Sign In</span>
              <button
                onClick={() => navigate("/register")}
                className="signupBtn"
              >
                Sign Up
              </button>
            </>
          )}
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
