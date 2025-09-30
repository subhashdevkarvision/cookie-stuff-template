import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import registerLogo from "../assets/registerLogo.png";
import registerBg from "../assets/registerbg.png";
import googleImg from "../assets/google.png";
import fbImg from "../assets/facebookImg.png";
import axios from "axios";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const [formData, setForData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setForData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/register`,
      formData
    );
    if (res.data.success) {
      console.log(res.data.message);
      setForData({
        fullName: "",
        email: "",
        password: "",
      });
      navigate("/login");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="mt-28 p-5 flex flex-col sm:flex sm:justify-between sm:flex-row register-page">
        <div className="sm:w-[40%] flex flex-col gap-20 sm:gap-20">
          <img src={registerLogo} className="w-96 sm:w-48 md:w-56" alt="" />
          <img src={registerBg} className="w-[80%] sm:w-[100%]" alt="" />
        </div>
        <form
          className="sm:w-[58%] w-full poppins-font"
          onSubmit={handleSubmit}
        >
          <div className="w-[70%] mx-auto">
            <h3 className="text-6xl sm:text-4xl text-center my-10 poppins-font text-[#043133] font-[500]">
              Welcome to Jammy
            </h3>
            <div className="my-10 sm:my-6">
              <label
                htmlFor="fullName"
                className="text-4xl sm:text-2xl md:text-xl poppins-font block text-[#4D5959] mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className=" py-5 w-full sm:text-2xl md:text-xl bg-[#EFF0F2] text-4xl poppins-font px-10"
                placeholder="Enter your name"
                onChange={handleOnChange}
                value={formData.fullName}
              />
            </div>
            <div className="my-10 sm:my-6">
              <label
                htmlFor="email"
                className="text-4xl sm:text-2xl md:text-xl poppins-font block text-[#4D5959] mb-2"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                className=" py-5 w-full sm:text-2xl md:text-xl bg-[#EFF0F2] text-4xl poppins-font px-10"
                placeholder="Enter Your Email"
                onChange={handleOnChange}
                value={formData.email}
              />
            </div>
            <div className="my-10 sm:my-6">
              <label
                htmlFor="password"
                className="text-4xl sm:text-2xl md:text-xl poppins-font block text-[#4D5959] mb-2"
              >
                Password
              </label>
              <input
                type="text"
                name="password"
                className=" py-5 w-full sm:text-2xl md:text-xl bg-[#EFF0F2] text-4xl poppins-font px-10"
                placeholder="Enter your password"
                onChange={handleOnChange}
                value={formData.password}
              />
            </div>
            <div className="my-10 sm:my-6 text-center">
              <button
                type="submit"
                className="text-center hover:bg-[#c97302] cursor-pointer text-4xl md:text-xl sm:text-2xl sm:py-4 py-6 px-10 bg-[#F99106] text-white poppins-font"
              >
                Create Account
              </button>
            </div>
            <div className="text-center poppins-font text-3xl sm:text-xl">
              Already have an account?
              <span
                onClick={() => navigate("/login")}
                className="text-[#F99106] cursor-pointer"
              >
                Log in
              </span>{" "}
            </div>
          </div>
          <div>
            <div className="text-center text-4xl sm:text-2xl my-10 sm:my-6">
              OR
            </div>
            <div className="flex gap-5 justify-center">
              <div className="flex gap-5 w-fit px-10 border border-[#D2D2D2]">
                <img src={googleImg} className="w-20 sm:w-16" alt="" />
                <p className="text-xl sm:text-sm">Sing up with Google</p>
              </div>
              <div className="flex gap-5 w-fit px-10 border border-[#D2D2D2]">
                <img src={fbImg} className="w-20 sm:w-16" alt="" />
                <p className="text-xl sm:text-sm">Sing up with facebook</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
