import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  addToCartApi,
  decreamentCartApi,
  increamentCartApi,
} from "../../reduxSlices/cartSlices";

const Card = ({ foodItem }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.cart.cartItems.find((item) => item.courseId._id === foodItem._id)
  );
  const user = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  const handleIncrementQty = async (id) => {
    if (product) {
      dispatch(increamentCartApi(id));
    }
  };
  const handleDecrementQty = async (id) => {
    if (product) {
      dispatch(decreamentCartApi(id));
    }
  };
  const handleAddToCart = async (item) => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(addToCartApi({ id: item._id }));
    }
  };

  return (
    <div id="card" onClick={() => navigate(`/courses/${foodItem._id}`)}>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/${foodItem.imgUrl}`}
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
        {product ? (
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
                handleDecrementQty(foodItem._id);
              }}
            >
              -
            </button>
            <span>{product.qty}</span>
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
          </div>
        ) : (
          <button
            className="add-to-cart-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(foodItem);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
