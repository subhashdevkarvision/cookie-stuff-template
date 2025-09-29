import React, { useEffect, useState } from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import {
  addToCartApi,
  decreamentCartApi,
  fetchCart,
  increamentCartApi,
} from "../../featuresSlice/cartSlices";

const Card = ({ foodItem }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleIncrementQty = async (id) => {
    const product = products.find((p) => p.courseId._id === id);
    if (product) {
      setQty((prev) => {
        prev = product.qty + 1;
        return prev;
      });
      dispatch(increamentCartApi(id));
    } else {
      setQty((prev) => (prev += 1));
    }
  };
  const handleDecrementQty = async (id) => {
    const product = products.find((p) => p.courseId.id === id);
    if (product) {
      setQty((prev) => {
        prev = product.qty - 1;
        return prev;
      });
      dispatch(decreamentCartApi(id));
    } else if (qty > 1) {
      setQty((prev) => (prev -= 1));
    }
  };
  const handleAddToCart = async (item, qty) => {
    dispatch(addToCartApi({ id: item._id, qty }));
  };
  useEffect(() => {
    dispatch(fetchCart());
    const product = products.find((item) => item.courseId._id === foodItem._id);
    if (product) {
      setQty(product.qty);
    }
  }, []);
  return (
    <div id="card" onClick={() => navigate(`/courses/${foodItem.id}`)}>
      <img
        src={`http://localhost:4000/${foodItem.imgUrl}`}
        id="CardImg"
        alt={foodItem.title}
      />
      <div id="cardContentBox">
        <div className="cardTitle">{foodItem.title}</div>
        <div className="cardTitle">({foodItem.access})</div>
        <div id="starGroup" className="flex">
          <span>{foodItem.ratings}</span>
          <span className="bi bi-star-fill"></span>
          <span className="bi bi-star-fill"></span>
          <span className="bi bi-star-fill"></span>
          <span className="bi bi-star-fill"></span>
          <span className="bi bi-star"></span>
          <span id="ratingCount">({foodItem.ratingCounts})</span>
        </div>
        <div id="priceGroup" className="flex">
          <span>&#8377;{foodItem.discountedPrice}</span>
          <del>&#8377;{foodItem.price}</del>
        </div>
        {foodItem?.courseType ? (
          <div className="badge text-center">{foodItem.courseType}</div>
        ) : (
          <div style={{ visibility: "hidden" }}>1</div>
        )}
        <div className="quantityBtns">
          <button
            style={{
              padding: "0.3rem 1.5rem",
              backgroundColor: "white",
              border: "1px solid gray",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleIncrementQty(foodItem._id);
            }}
          >
            +
          </button>
          <span>{qty}</span>
          <button
            style={{
              padding: "0.3rem 1.5rem",
              backgroundColor: "white",
              border: "1px solid gray",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleDecrementQty(foodItem._id);
            }}
          >
            -
          </button>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(foodItem, qty);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
