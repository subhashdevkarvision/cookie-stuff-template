import React, { useState } from "react";
import "./contactUsComponent.css";

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2 className="text-center text-6xl sm:text-4xl">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="text-4xl sm:text-2xl" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="text-4xl sm:text-2xl" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="text-4xl sm:text-2xl" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUsComponent;
