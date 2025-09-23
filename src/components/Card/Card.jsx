import React, { useEffect, useState } from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementFromCart,
  incrementItems,
} from "../../featuresSlice/featureSlices";

const Card = ({ foodItem }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  
  const handleIncrementQty = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setQty((prev) => {
        prev = product.qty + 1;
        return prev;
      });
      dispatch(incrementItems({ id }));
    } else {
      setQty((prev) => (prev += 1));
    }
  };
  const handleDecrementQty = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setQty((prev) => {
        prev = product.qty - 1;
        return prev;
      });
      dispatch(decrementFromCart({ id }));
    } else if (qty > 1) {
      setQty((prev) => (prev -= 1));
    }
  };
  const handleAddToCart = (item, qty) => {
    dispatch(addToCart({ ...item, qty }));
  };
  useEffect(() => {
    const product = products.find((item) => item.id === foodItem.id);
    if (product) {
      setQty(product.qty);
    }
  }, [products]);
  return (
    <div id="card">
      <img src={foodItem.imgUrl} id="CardImg" alt={foodItem.title} />
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
            onClick={() => handleIncrementQty(foodItem.id)}
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
            onClick={() => handleDecrementQty(foodItem.id)}
          >
            -
          </button>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => {
            console.log({ ...foodItem, qty }), handleAddToCart(foodItem, qty);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
