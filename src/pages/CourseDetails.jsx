import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import "../../src/courseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();
  const courses = useSelector((state) => state.allFoodCourses);
  const course = courses.find((c) => c.id === parseInt(id));
  if (!course) {
    return <h1>No Course is available</h1>;
  }
  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen mt-16">
        {/* Breadcrumb */}
        <div id="course-bg-img" className="w-full bg-gray-50 py-28 px-6">
          <h2 className="text-xl yeseva-one-font">Course Details</h2>
          <p className="text-sm poppins-font text-gray-500">
            Home <span className="text-orange-500"> // Courses</span>
          </p>
        </div>
        <div>
          <div className="poppins-font max-w-3xs bg-[#FFF2F2] p-5">
            <h3 className="text-center text-xl font-bold">
              &#8377;{course.discountedPrice}
            </h3>
            <ul className="space-y-4  text-gray-700">
              <li className="flex justify-between">
                <span className="bi bi-person">
                  <span className="ml-2 font-medium">Instructor:</span>
                </span>
                <span>{course.Instructor}</span>
              </li>
              <li className="flex justify-between">
                <span className="bi bi-clock">
                  <span className="ml-2 font-medium">Duration:</span>
                </span>
                <span className="">{course.Duration}</span>
              </li>
              <li className="flex justify-between">
                <span className="bi bi-collection-play">
                  <span className="ml-2 font-medium">Lectures:</span>
                </span>
                <span>{course.Lectures}</span>
              </li>
              <li className="flex justify-between">
                <span className="bi bi-bar-chart-fill">
                  <span className="ml-2 font-medium">Level:</span>
                </span>
                <span>{course.Level}</span>
              </li>
              <li className="flex justify-between">
                <span className="bi bi-globe-americas">
                  <span className="ml-2 font-medium">Language:</span>
                </span>
                <span>{course.Language}</span>
              </li>
              <li className="flex justify-between">
                <span className="bi bi-journal-bookmark">
                  <span className="ml-2 font-medium">Certificate:</span>
                </span>
                <span>{course.Certificate}</span>
              </li>
            </ul>
            <button className="mt-6 yeseva-one-font w-full bg-[#F99106] text-xl hover:bg-orange-600 text-white  py-3 rounded-3xl shadow-md transition">
              Enroll now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
