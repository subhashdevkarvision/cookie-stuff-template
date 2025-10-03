import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "../../src/courseDetails.css";
import user from "../assets/user1.jpg";
import vector1 from "../assets/Vector1.png";
import vector2 from "../assets/Vector2.png";
import vector3 from "../assets/Vector3.png";
import vector4 from "../assets/Vector4.png";
import vector5 from "../assets/Vector5.png";
import vector6 from "../assets/Vector6.png";
import linkden from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import sky from "../assets/sky.png";
import ContactUs from "../components/contactUs/ContactUs";
import { fetchCourse } from "../reduxSlices/featureSlices";
import axios from "axios";
import Card from "../components/card/Card";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.courses);
  const fetchCourseById = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/courses/${id}`
      );
      if (res.data.success) {
        setCourse(res.data.course);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);
  useEffect(() => {
    fetchCourseById();
  }, [id]);

  return (
    <div>
      <div id="course-bg-img" className="w-full bg-gray-50 py-28 mt-32">
        <h2 className="text-6xl sm:text-[40px] yeseva-one-font">
          Course Details
        </h2>
        <p className="text-2xl poppins-font mt-5">
          Home // <span className="text-[#F99106]"> Courses</span>
        </p>
      </div>
      <div className="bg-white my-10 contact-details-section">
        {/* Breadcrumb */}
        <div id="image-list-container" className="flex flex-wrap gap-8 mt-10">
          <div className="poppins-font w-full sm:w-[30%] bg-[#FFF2F2] shadow-lg p-5">
            <h3 className="text-center text-5xl font-medium sm:text-2xl border-b border-b-[#F99106] py-5 sm:py-2">
              &#8377;{course.discountedPrice}
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-4xl sm:text-sm border-b py-5 sm:py-3 m-0 border-b-[#F99106]">
                <span className="flex size-7  sm:size-3.5 gap-1">
                  <img src={vector1} alt="" />
                  <span className="ml-2 font-normal list-items">
                    Instructor
                  </span>
                </span>
                <span className="text-[#00000080]">{course.Instructor}</span>
              </li>
              <li className="flex justify-between text-4xl sm:text-sm border-b py-5 sm:py-3 m-0 border-b-[#F99106]">
                <span className="flex size-7 sm:size-3.5 gap-1">
                  <img src={vector2} alt="" />
                  <span className="ml-2 font-normal list-items">Duration</span>
                </span>
                <span className="text-[#00000080]">{course.Duration}</span>
              </li>
              <li className="flex justify-between text-4xl sm:text-sm border-b py-5 sm:py-3 m-0 border-b-[#F99106]">
                <span className="flex size-7 sm:size-3.5 gap-1">
                  <img src={vector3} alt="" />
                  <span className="ml-2 font-normal list-items">Lectures</span>
                </span>
                <span className="text-[#00000080]">{course.Lectures}</span>
              </li>
              <li className="flex justify-between text-4xl sm:text-sm border-b py-5 sm:py-3 m-0 border-b-[#F99106]">
                <span className="flex size-7 sm:size-3.5 gap-1">
                  <img src={vector4} alt="" />
                  <span className="ml-2 font-normal list-items">Level</span>
                </span>
                <span className="text-[#00000080]">{course.Level}</span>
              </li>
              <li className="flex justify-between text-4xl sm:text-sm border-b py-5 sm:py-3 m-0 border-b-[#F99106]">
                <span className="flex size-7 sm:size-3.5 gap-1">
                  <img src={vector5} alt="" />
                  <span className="ml-2 font-normal list-items">Language</span>
                </span>
                <span className="text-[#00000080]">{course.Language}</span>
              </li>
              <li className="flex justify-between text-4xl sm:text-sm border-b py-5 sm:py-3 m-0 border-b-[#F99106]">
                <span className="flex size-7 sm:size-3.5 gap-1">
                  <img src={vector6} alt="" />
                  <span className="ml-2 font-normal list-items">
                    Certificate
                  </span>
                </span>
                <span className="text-[#00000080]">{course.Certificate}</span>
              </li>
            </ul>
            <button className="mt-6 yeseva-one-font w-full bg-[#F99106] text-4xl sm:text-xl hover:bg-orange-600 text-white  py-5 sm:py-3 rounded-3xl shadow-md transition">
              Enroll now
            </button>
          </div>
          {/* image container */}
          <div className="poppins-font w-full sm:w-[65%]">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${course.imgUrl}`}
              className="w-full h-[300px] md:h-[200px] lg:h-[270px] xl:h-[320px] object-cover object-center rounded-t-2xl"
              alt=""
            />
            <h3 className="text-5xl sm:text-2xl font-normal my-5 yeseva-one-font">
              {course.title}
            </h3>
            <div>
              <div className="flex flex-wrap gap-2.5 md:gap-0   sm:gap-16 justify-between text-3xl sm:text-lg">
                <div className="flex gap-2">
                  <img src={user} className="size-12 rounded-full" alt="" />
                  <span className="text-[#00000080]">
                    By:{" "}
                    <span className="text-black font-medium">
                      {course.Instructor}
                    </span>
                  </span>
                </div>
                <span className="text-[#F99106]">
                  {course.Enrolled}{" "}
                  <span className="text-black ">Enrolled Students</span>
                </span>
                <div className="flex text-[#F99106] gap-2.5">
                  <span>{course.ratings}</span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star"></span>
                  <span id="ratingCount">({course.ratingCounts})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second section  */}
        <div className="flex mt-5 flex-wrap gap-2.5 sm:gap-8 share-list-container">
          <div className="w-full  sm:w-[30%] mt-5">
            <p className="text-4xl sm:text-2xl">Share Course:</p>
            <div className="mt-4 flex gap-5">
              <img src={linkden} alt="" className="size-9 sm:size-10" />
              <img src={fb} alt="" className="size-9 sm:size-10" />
              <img src={insta} alt="" className="size-9 sm:size-10" />
              <img src={sky} alt="" className="size-9 sm:size-10" />
            </div>
          </div>
          <div className="w-full mt-2.5 sm:m-0 sm:w-[65%]">
            <p className="text-center bg-[#FFF2F2] shadow-md p-4 mb-5 text-5xl sm:text-3xl">
              Details
            </p>
            <div className="poppins-font">
              <div className="flex flex-col sm:flex-row sm:justify-between share-list-container">
                <div className="text-4xl md:text-xl sm:text-2xl flex gap-5 mb-10 sm:mb-4 sm:w-[45%] share-list-container">
                  <span className="bi bi-arrow-right-circle-fill text-[#F99106]"></span>
                  <p>FREE Mix Veg with Fried Potato Course</p>
                </div>
                <div className="text-4xl md:text-xl sm:text-2xl flex gap-5 mb-10 sm:mb-4 sm:w-[45%] share-list-container">
                  <span className="bi bi-arrow-right-circle-fill text-[#F99106]"></span>
                  <p>
                    Step-by-step cooking video instructions + Detailed PDF notes
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between share-list-container">
                <div className="text-4xl md:text-xl sm:text-2xl flex gap-5 mb-10 sm:mb-4 sm:w-[45%] share-list-container">
                  <span className="bi bi-arrow-right-circle-fill text-[#F99106]"></span>
                  <p>Learn from Experts</p>
                </div>
                <div className="text-4xl md:text-xl sm:text-2xl flex gap-5 mb-10 sm:mb-4 sm:w-[45%] share-list-container">
                  <span className="bi bi-arrow-right-circle-fill text-[#F99106]"></span>
                  <p>2,00,00+ Trained students</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between share-list-container">
                <div className="text-4xl md:text-xl sm:text-2xl flex gap-5 mb-10 sm:mb-4 sm:w-[45%] share-list-container">
                  <span className="bi bi-arrow-right-circle-fill text-[#F99106]"></span>
                  <p>100% veg recipes</p>
                </div>
                <div className="text-4xl md:text-xl sm:text-2xl flex gap-5 mb-10 sm:mb-4 sm:w-[45%] share-list-container">
                  <span className="bi bi-arrow-right-circle-fill text-[#F99106]"></span>
                  <p>Doubt solving over call</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between share-list-container">
                <div className="text-4xl md:text-xl sm:text-2xl flex gap-5 mb-10 sm:mb-4 sm:w-[45%] share-list-container">
                  <span className="bi bi-arrow-right-circle-fill text-[#F99106]"></span>
                  <p>Explore new recipes every day</p>
                </div>
                <div className="text-4xl md:text-xl sm:text-2xl flex gap-5 mb-10 sm:mb-4 sm:w-[45%] share-list-container">
                  <span className="bi bi-arrow-right-circle-fill text-[#F99106]"></span>
                  <p>Free Lifetime Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-md bg-[#FFF2F2] text-center p-5 text-4xl mt-5">
        Course Include in this collection
      </div>
      <div className="my-10 contact-details-section">
        <h4 className="text-center text-5xl my-10">Free Recipes </h4>
        <div className="flex justify-center md:justify-between lg:justify-center  gap-10 flex-wrap">
          {products?.length > 0 &&
            products?.map(
              (item, index) =>
                item.category === "FreeRecepies" && (
                  <Card key={index} foodItem={item} />
                )
            )}
          {products?.length > 0 &&
            products?.map(
              (item, index) =>
                item.category === "HealthyRecepies" && (
                  <Card key={index} foodItem={item} />
                )
            )}
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default CourseDetails;
