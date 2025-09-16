// import React, { useState } from "react";
// import logo from "../../assets/logo.png";
// import searchVector from "../../assets/search-Vector.png";
// import "./navbarDemo.css";
// // import "../../styles/common.css";

// const NavbarDemo = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex-between">
//       {/* Top Row */}
//       <div className="nav-left">
//         <img src={logo} alt="Logo" />
//       </div>
//       {/* Menu */}
//       <div className={`nav-center flex ${isOpen ? " show" : ""}`}>
//         <ul>
//           <li className="active">Home</li>
//           <li>All Courses</li>
//           <li>Contact Us</li>
//           <li>Posts</li>
//         </ul>
//       </div>

//       <div className={`nav-right${isOpen ? " show" : ""}`}>
//         <img src={searchVector} alt="Search" className="searchIcon" />
//         <div className="signin">Sign In</div>
//         <button className="signupBtn">Sign Up</button>
//       </div>

//       <div id="hambugger">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className={isOpen ? "bi bi-x-lg" : "bi bi-list"}
//         ></button>
//       </div>
//     </nav>
//   );
// };

// export default NavbarDemo;
