import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import registerLogo from "../assets/registerLogo.png";
import registerBg from "../assets/registerbg.png";
import googleImg from "../assets/google.png";
import fbImg from "../assets/facebookImg.png";
import axios from "axios";
import { useNavigate } from "react-router";
import centerBg from "../assets/center-bg.jpg";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [formData, setForData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleValidation = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setForData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      return;
    }
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
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };
  return (
    <div className="min-h-screen">
      <div className="mt-32 px-5 pb-5 flex flex-col sm:flex sm:justify-center sm:flex-row register-page">
        <div className="sm:w-[49%] flex flex-col gap-20 sm:gap-20 sm:border-r md:min-h-[70vh] lg:min-h-[80vh] sm:border-r-[#EFF0F2]">
          <img src={registerLogo} className="w-96 sm:w-48 md:w-56" alt="" />
          <div className="relative flex flex-col">
            <img src={registerBg} className="w-[80%] sm:w-[65%]" alt="" />
            <img
              src={centerBg}
              className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[15%] rounded-full"
              alt=""
            />
          </div>
        </div>
        <form
          className="sm:w-[50%] w-full poppins-font sm:border-l md:min-h-[70vh] lg:min-h-[80vh] sm:border-l-[#EFF0F2]"
          onSubmit={handleSubmit}
        >
          <div className="w-[70%] mx-auto">
            <h3 className="text-6xl sm:text-2xl lg:text-4xl text-center p-0 my-4 poppins-font text-[#043133] font-[500]">
              Welcome to Jammy
            </h3>
            <div className="my-10 sm:my-2 lg:my-6">
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
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
              )}
            </div>
            <div className="my-10 sm:my-2 lg:my-6">
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
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>
            <div className="my-10 sm:my-2 lg:my-6">
              <label
                htmlFor="password"
                className="text-4xl sm:text-2xl md:text-xl poppins-font block text-[#4D5959] mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className=" py-5 w-full sm:text-2xl md:text-xl bg-[#EFF0F2] text-4xl poppins-font px-10"
                placeholder="Enter your password"
                onChange={handleOnChange}
                value={formData.password}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">{errors.password}</p>
              )}
            </div>
            <div className="my-10 sm:my-2 lg:my-6 text-center">
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
                {" "}
                Log in
              </span>{" "}
            </div>
          </div>
          <div className="w-[80%] mx-auto">
            <div className="text-center text-4xl sm:text-2xl my-10 sm:my-6 font-[500] text-[#043133]">
              OR
            </div>
            <div className="flex gap-3 justify-center">
              <div className="flex gap-5 w-72 border ps-5 h-24 sm:h-16 cursor-pointer border-[#D2D2D2]">
                <img src={googleImg} className="w-20 sm:w-16" alt="" />
                <p className="text-xl sm:text-sm text-[#043133] font-[500]">
                  Sing up with Google
                </p>
              </div>
              <div className="flex gap-5 w-72 border ps-5 h-24 sm:h-16 cursor-pointer border-[#D2D2D2]">
                <img src={fbImg} className="w-20 py-1 sm:w-14" alt="" />
                <p className="text-xl sm:text-sm text-[#043133] font-[500]">
                  Sing up with facebook
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
