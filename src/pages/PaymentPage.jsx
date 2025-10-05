import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaymentForm from "../components/paymentForm/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState("");

  const userCart = useSelector((state) => state.cart.cartItems);
  console.log(userCart);
  const totalAmount = userCart.reduce(
    (acc, item) => acc + item.courseId.discountedPrice * item.qty,
    0
  );
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const { data } = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/checkout/create-payment",
          { amount: totalAmount, cartItems: userCart }
        );
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(error.message);
      }
    };
    createPaymentIntent();
  }, [totalAmount]);
  if (!clientSecret) {
    return (
      <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentPage;
