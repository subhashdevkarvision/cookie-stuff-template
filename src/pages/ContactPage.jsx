import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ContactUsComponent from "../components/contactUsComponent/ContactUsComponent";
import CartModal from "../components/navbar/CartModal";

const ContactUsPage = () => {
  return (
    <div>
      <div style={{ marginTop: "10rem", height: "75vh" }}>
        <ContactUsComponent />
      </div>
    </div>
  );
};

export default ContactUsPage;
