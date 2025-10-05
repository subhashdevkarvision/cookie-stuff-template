import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const userCart = useSelector((state) => state.cart.cartItems);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setLoading(true);
    setMessage("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${import.meta.env.VITE_FRONTEND_URL}/payment-result`,
      },
    });
    if (error) {
      setMessage(error.message || "Something went wrong.");
    }

    setLoading(false);
  };
  const totalAmount = userCart.reduce(
    (acc, item) => acc + item.courseId.discountedPrice * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 poppins-font">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 🛒 Left: Cart Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Your Cart Items
          </h3>

          {userCart && userCart.length > 0 ? (
            <div className="space-y-4">
              {userCart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 border-b pb-3"
                >
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${
                      item.courseId.imgUrl
                    }`}
                    alt={item.courseId.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-gray-800 font-medium">
                      {item.courseId.title}
                    </h4>
                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                  </div>
                  <p className="font-semibold text-gray-800">
                    ₹{item.courseId.discountedPrice}
                  </p>
                </div>
              ))}
              <div className="flex justify-between font-semibold text-gray-900 pt-3">
                <span>Total:</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* 💳 Right: Payment Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
            Payment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <PaymentElement className="p-3 border rounded-md text-gray-700" />

            <button
              type="submit"
              disabled={!stripe || loading}
              className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {loading ? "Processing..." : `Pay ₹${totalAmount}`}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-center font-medium ${
                message.includes("successful")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
      {/* <div className="border">
        <h3>Your Cart Items</h3>
        {userCart &&
          userCart.map((item) => (
            <div key={item._id}>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${
                  item.courseId.imgUrl
                }`}
                alt=""
              />
              <p>{item.qty}</p>
              <p>{item.courseId.discountedPrice}</p>
            </div>
          ))}
      </div>
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-xl mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Payment</h2>
        <form action="" onSubmit={handleSubmit}>
          <CardElement className="p-3 border rounded-md mb-4"></CardElement>
          <button
            type="submit"
            disabled={!stripe || loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Processing..." : `Pay ₹${amount}`}
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div> */}
    </div>
  );
};

export default PaymentForm;
