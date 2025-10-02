import React from "react";
import "./contactUs.css";
import contactLogo from "../../assets/logoContact.png";
import { useNavigate } from "react-router";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className="contactUs">
      <h3 className="contact-title">Contact Us</h3>
      <div className="contact-section">
        <div className="contact-header">
          <img
            src={contactLogo}
            alt="Cooking Stuff Logo"
            className="contact-logo"
          />
          <p className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            nisi tortor tellus sagittis donec id est, dolor, morbi. Id facilisis
            sem sit maecenas metus, lacinia non. Lorem congue est at ultrices
            suscipit at nulla neque volutpat. Porta proin hdhhhjjf.
          </p>
        </div>
        <div className="contact-links">
          <div className="link-group">
            <h4>Navigation</h4>
            <ul>
              <li onClick={() => navigate("/courses")}>
                <i className="bi bi-caret-right-fill"></i> All Course
              </li>
              <li onClick={() => navigate("/contact-us")}>
                <i className="bi bi-caret-right-fill"></i> Contact Us
              </li>
              <li onClick={() => navigate("/posts")}>
                <i className="bi bi-caret-right-fill"></i> Posts
              </li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Categories</h4>
            <ul>
              <li>
                <i className="bi bi-caret-right-fill"></i> Featured
              </li>
              <li>
                <i className="bi bi-caret-right-fill"></i> Free Recipes
              </li>
              <li>
                <i className="bi bi-caret-right-fill"></i> Paid Courses
              </li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Get in touch</h4>
            <p className="getTouch">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong>Address:</strong> Lumbung <br />
              Hidup St. Madiun <br />
              City East Java 63125
            </p>
            <p>
              <strong>Email:</strong> cookingstuff@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
