import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-left">@ Copyright 2022. All Rights Reserved by</p>

      <div className="footer-links">
        <a href="#">Terms & Condition</a>
        <a href="#">License</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
